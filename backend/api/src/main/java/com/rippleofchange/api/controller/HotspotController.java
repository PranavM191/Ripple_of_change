package com.rippleofchange.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper; // Add this import
import com.rippleofchange.api.dto.HotspotRequest;
import com.rippleofchange.api.model.Hotspot;
import com.rippleofchange.api.service.HotspotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile; // Add this import

import java.io.IOException; // Add this import
import java.util.List;

@RestController
@RequestMapping("/api/hotspots")
public class HotspotController {

    @Autowired
    private HotspotService hotspotService;

    // This is for converting the JSON string part of the request
    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * API Endpoint to get all hotspots for the map.
     * This is a protected endpoint.
     */
    @GetMapping
    public ResponseEntity<List<Hotspot>> getAllHotspots() {
        return ResponseEntity.ok(hotspotService.getAllHotspots());
    }

    /**
     * API Endpoint to create a new hotspot.
     * This is a protected endpoint.
     * It consumes MULTIPART_FORM_DATA_VALUE, not regular JSON.
     */
    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Hotspot> createHotspot(
            @RequestParam("data") String hotspotRequestJson, // The JSON data as a string
            @RequestParam("file") MultipartFile file,        // The image file
            @AuthenticationPrincipal UserDetails userDetails) {

        try {
            // 1. Convert the JSON string into our DTO object
            HotspotRequest request = objectMapper.readValue(hotspotRequestJson, HotspotRequest.class);

            // 2. Get the user's email from their token
            String userEmail = userDetails.getUsername();

            // 3. Call the service to save the file and data
            Hotspot newHotspot = hotspotService.createHotspot(request, file, userEmail);

            return ResponseEntity.ok(newHotspot);

        } catch (IOException e) {
            // This catches errors from the JSON conversion
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            // This catches errors from the file saving or database
            return ResponseEntity.status(500).build();
        }
    }
}