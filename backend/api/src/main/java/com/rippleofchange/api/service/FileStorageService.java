package com.rippleofchange.api.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileStorageService {

    // We will save files in a folder named "uploads" at the root of your project
    private final Path root = Paths.get("uploads");

    public FileStorageService() {
        try {
            // Create the "uploads" directory if it doesn't exist
            if (!Files.exists(root)) {
                Files.createDirectory(root);
            }
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    /**
     * Saves a file to the server.
     * @param file The file uploaded by the user
     * @return The unique filename that was saved (e.g., "uuid-original-name.jpg")
     */
    public String save(MultipartFile file) {
        try {
            // Get the original filename
            String originalFilename = file.getOriginalFilename();

            // Create a unique filename to prevent overwriting
            String uniqueFilename = UUID.randomUUID().toString() + "-" + originalFilename;

            // Copy the file to the target location (uploads/unique-filename.jpg)
            Files.copy(file.getInputStream(), this.root.resolve(uniqueFilename));

            return uniqueFilename;
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }

    // In a real app, we'd also add a method here to "load" the file
    // For now, we'll just store the name.
}