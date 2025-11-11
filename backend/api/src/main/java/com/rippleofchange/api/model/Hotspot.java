package com.rippleofchange.api.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "hotspots")
public class Hotspot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    // This tells JPA to store the enum as a simple string ("LOW", "MODERATE", "HIGH")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Severity severity;

    @Column(nullable = false)
    private String imageUrl; // We'll store the URL of the uploaded image

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt; // To know when it was reported

    // Links this hotspot to the user who reported it
    @ManyToOne
    @JoinColumn(name = "reporter_id", nullable = false)
    private User reporter;

    // This is a special method that runs just before a new hotspot is saved
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}