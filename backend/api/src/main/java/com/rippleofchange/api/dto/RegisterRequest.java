package com.rippleofchange.api.dto;

import lombok.Data;

@Data // From Lombok, gives us getters and setters
public class RegisterRequest {
    private String fullName;
    private String email;
    private String password;
}