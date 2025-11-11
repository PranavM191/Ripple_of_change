package com.rippleofchange.api.controller;

import com.rippleofchange.api.dto.DriveRequest;
import com.rippleofchange.api.model.Drive;
import com.rippleofchange.api.service.DriveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drives")
public class DriveController {

    @Autowired
    private DriveService driveService;

    @PostMapping
    public ResponseEntity<Drive> createDrive(@RequestBody DriveRequest driveRequest, @AuthenticationPrincipal UserDetails userDetails) {
        String userEmail = userDetails.getUsername();
        Drive newDrive = driveService.createDrive(driveRequest, userEmail);
        return ResponseEntity.ok(newDrive);
    }

    @GetMapping
    public ResponseEntity<List<Drive>> getAllDrives() {
        List<Drive> drives = driveService.getAllDrives();
        return ResponseEntity.ok(drives);
    }

    // --- NEW ENDPOINT TO JOIN A DRIVE ---
    // The {driveId} part is a "path variable"
    @PostMapping("/{driveId}/join")
    public ResponseEntity<Drive> joinDrive(@PathVariable Long driveId, @AuthenticationPrincipal UserDetails userDetails) {
        // @PathVariable grabs the ID from the URL
        String userEmail = userDetails.getUsername();
        Drive updatedDrive = driveService.joinDrive(driveId, userEmail);
        return ResponseEntity.ok(updatedDrive);
    }

    // --- NEW ENDPOINT TO LEAVE A DRIVE ---
    // We use @DeleteMapping here for "leaving"
    @DeleteMapping("/{driveId}/leave")
    public ResponseEntity<Drive> leaveDrive(@PathVariable Long driveId, @AuthenticationPrincipal UserDetails userDetails) {
        String userEmail = userDetails.getUsername();
        Drive updatedDrive = driveService.leaveDrive(driveId, userEmail);
        return ResponseEntity.ok(updatedDrive);
    }
}