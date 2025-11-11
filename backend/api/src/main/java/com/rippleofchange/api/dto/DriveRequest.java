package com.rippleofchange.api.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class DriveRequest {
    private String title;
    private String description;
    private String locationName;
    private Double latitude;
    private Double longitude;
    private LocalDateTime eventDate;
}