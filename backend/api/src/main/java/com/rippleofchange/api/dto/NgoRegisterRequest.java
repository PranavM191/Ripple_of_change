package com.rippleofchange.api.dto;

import lombok.Data;

@Data
public class NgoRegisterRequest {
    private String organizationName;
    private String fullName; // Contact person's name
    private String email;
    private String password;
}