package com.rippleofchange.api.config;

import com.rippleofchange.api.service.AuthService;
import com.rippleofchange.api.service.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component // Tells Spring to manage this class
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private AuthService authService; // We use this to find the user in the DB

    @Autowired
    private JwtUtil jwtUtil; // We use this to read the token

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        final String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwt = null;

        // 1. Check for the "Authorization" header and make sure it has a "Bearer " token
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7); // Get the token part (after "Bearer ")
            try {
                username = jwtUtil.extractUsername(jwt); // Get the email from the token
            } catch (Exception e) {
                // Token is invalid (expired, wrong signature, etc.)
                System.out.println("Error extracting username: " + e.getMessage());
            }
        }

        // 2. If we found a user and they aren't already logged in...
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // 3. ...load the user from the database
            UserDetails userDetails = this.authService.loadUserByUsername(username);

            // 4. ...and validate the token
            if (jwtUtil.validateToken(jwt, userDetails)) {

                // 5. If valid, manually set the user as "logged in" for this request
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // 6. Pass the request (and response) along to the next filter in the chain
        filterChain.doFilter(request, response);
    }
}