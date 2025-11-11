package com.rippleofchange.api.service;

import com.rippleofchange.api.dto.AuthResponse;
import com.rippleofchange.api.dto.LoginRequest;
import com.rippleofchange.api.dto.NgoRegisterRequest; // <-- NEW IMPORT
import com.rippleofchange.api.dto.RegisterRequest;
import com.rippleofchange.api.model.Role; // <-- NEW IMPORT
import com.rippleofchange.api.model.User;
import com.rippleofchange.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority; // <-- NEW IMPORT
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections; // <-- NEW IMPORT

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtil jwtUtil;

    // --- UPDATED register METHOD ---
    public User register(RegisterRequest registerRequest) {
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            throw new RuntimeException("Error: Email is already taken!");
        }

        User user = new User();
        user.setFullName(registerRequest.getFullName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        user.setRole(Role.ROLE_USER); // <-- Set the default role

        User savedUser = userRepository.save(user);
        return savedUser;
    }

    // --- NEW registerNgo METHOD ---
    public User registerNgo(NgoRegisterRequest registerRequest) {
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            throw new RuntimeException("Error: Email is already taken!");
        }

        User user = new User();
        user.setFullName(registerRequest.getFullName()); // Contact person
        user.setOrganizationName(registerRequest.getOrganizationName()); // NGO name
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        user.setRole(Role.ROLE_NGO); // <-- Set the NGO role

        User savedUser = userRepository.save(user);
        return savedUser;
    }

    // --- UPDATED login METHOD ---
    public AuthResponse login(LoginRequest loginRequest, AuthenticationManager authManager) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token = jwtUtil.generateToken(userDetails);

        return new AuthResponse(token, userDetails.getUsername());
    }

    // --- UPDATED loadUserByUsername METHOD ---
    // This is critical for security to see the user's role
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        // Give Spring Security the user's role
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(user.getRole().name());

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                Collections.singletonList(authority) // <-- Pass the role here
        );
    }
}