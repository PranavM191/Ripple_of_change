package com.rippleofchange.api.service;

import com.rippleofchange.api.dto.DriveRequest;
import com.rippleofchange.api.model.Drive;
import com.rippleofchange.api.model.User;
import com.rippleofchange.api.repository.DriveRepository;
import com.rippleofchange.api.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException; // Add this import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriveService {

    @Autowired
    private DriveRepository driveRepository;

    @Autowired
    private UserRepository userRepository;

    public Drive createDrive(DriveRequest driveRequest, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + userEmail));

        Drive drive = new Drive();
        drive.setTitle(driveRequest.getTitle());
        drive.setDescription(driveRequest.getDescription());
        drive.setLocationName(driveRequest.getLocationName());
        drive.setLatitude(driveRequest.getLatitude());
        drive.setLongitude(driveRequest.getLongitude());
        drive.setEventDate(driveRequest.getEventDate());
        drive.setOrganizer(user);

        return driveRepository.save(drive);
    }

    public List<Drive> getAllDrives() {
        return driveRepository.findAll();
    }

    // --- NEW METHOD TO JOIN A DRIVE ---
    public Drive joinDrive(Long driveId, String userEmail) {
        // 1. Find the drive
        Drive drive = driveRepository.findById(driveId)
                .orElseThrow(() -> new EntityNotFoundException("Drive not found with id: " + driveId));

        // 2. Find the user
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + userEmail));

        // 3. Add the user to the drive's participant set
        drive.getParticipants().add(user);

        // 4. Save the drive (this updates the join table)
        return driveRepository.save(drive);
    }

    // --- NEW METHOD TO LEAVE A DRIVE ---
    public Drive leaveDrive(Long driveId, String userEmail) {
        // 1. Find the drive
        Drive drive = driveRepository.findById(driveId)
                .orElseThrow(() -> new EntityNotFoundException("Drive not found with id: " + driveId));

        // 2. Find the user
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + userEmail));

        // 3. Remove the user from the drive's participant set
        drive.getParticipants().remove(user);

        // 4. Save the drive
        return driveRepository.save(drive);
    }
}