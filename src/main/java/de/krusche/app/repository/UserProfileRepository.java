package de.krusche.app.repository;

import de.krusche.app.domain.User;
import de.krusche.app.domain.UserProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfileEntity, Long> {

    Optional<UserProfileEntity> findByUser(User user);

}
