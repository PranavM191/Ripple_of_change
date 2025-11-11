package com.rippleofchange.api.repository;

import com.rippleofchange.api.model.Hotspot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotspotRepository extends JpaRepository<Hotspot, Long> {
    // JpaRepository gives us .save(), .findById(), .findAll(), etc. for free!
}