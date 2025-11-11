package com.rippleofchange.api.controller;

import com.rippleofchange.api.dto.AuthResponse;
import com.rippleofchange.api.dto.LoginRequest;
import com.rippleofchange.api.dto.NgoRegisterRequest; // <-- NEW IMPORT
import com.rippleofchange.api.dto.RegisterRequest;
import com.rippleofchange.api.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        try {
            authService.register(registerRequest);
            return ResponseEntity.ok("User registered successfully!");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // --- NEW ENDPOINT FOR NGO REGISTRATION ---
    @PostMapping("/register-ngo")
    public ResponseEntity<?> registerNgo(@RequestBody NgoRegisterRequest registerRequest) {
        try {
            authService.registerNgo(registerRequest);
            return ResponseEntity.ok("NGO registered successfully!");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            AuthResponse authResponse = authService.login(loginRequest, authenticationManager);
            return ResponseEntity.ok(authResponse);
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Error: Invalid email or password");
        }
    }
}