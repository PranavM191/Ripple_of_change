package com.rippleofchange.api.repository;

import com.rippleofchange.api.model.Drive;
import com.rippleofchange.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DriveRepository extends JpaRepository<Drive, Long> {

    // Again, we get all the .save(), .findById(), etc. methods for free.

    // Let's add a custom method to find all drives created by a specific user:
    List<Drive> findByOrganizer(User user);

    // We can also find drives by location, but let's keep it simple for now.
}