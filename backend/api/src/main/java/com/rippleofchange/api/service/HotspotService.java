package com.rippleofchange.api.service;

import com.rippleofchange.api.dto.HotspotRequest;
import com.rippleofchange.api.model.Hotspot;
import com.rippleofchange.api.model.User;
import com.rippleofchange.api.repository.HotspotRepository;
import com.rippleofchange.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class HotspotService {

    @Autowired
    private HotspotRepository hotspotRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FileStorageService fileStorageService;

    /**
     * Creates a new hotspot.
     * @param request The hotspot data (lat, long, severity)
     * @param file The image file
     * @param userEmail The email of the logged-in user
     * @return The saved Hotspot object
     */
    public Hotspot createHotspot(HotspotRequest request, MultipartFile file, String userEmail) {

        // 1. Find the user who is reporting this
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + userEmail));

        // 2. Save the image file to the server's disk
        String filename = fileStorageService.save(file);

        // 3. Create a "web" URL for the file
        // For now, this is just a path. We'll make it a real URL later.
        String imageUrl = "/uploads/" + filename;

        // 4. Create the new Hotspot object
        Hotspot hotspot = new Hotspot();
        hotspot.setLatitude(request.getLatitude());
        hotspot.setLongitude(request.getLongitude());
        hotspot.setSeverity(request.getSeverity());
        hotspot.setImageUrl(imageUrl);
        hotspot.setReporter(user);

        // 5. Save the hotspot to the database
        return hotspotRepository.save(hotspot);
    }

    /**
     * Gets all hotspots.
     * @return A list of all Hotspot objects
     */
    public List<Hotspot> getAllHotspots() {
        return hotspotRepository.findAll();
    }
}