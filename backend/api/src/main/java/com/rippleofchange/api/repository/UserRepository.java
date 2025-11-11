package com.rippleofchange.api.repository;

import com.rippleofchange.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // Tells Spring this is a Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // JpaRepository gives us:
    // .save()
    // .findById()
    // .findAll()
    // .delete()
    // ...and many more for free!

    // We can also add our own custom finder methods.
    // Spring is smart enough to understand this method name:
    Optional<User> findByEmail(String email);
}