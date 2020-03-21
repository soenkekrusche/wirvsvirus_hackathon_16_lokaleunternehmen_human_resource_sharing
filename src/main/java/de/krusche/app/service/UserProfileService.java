package de.krusche.app.service;


import de.krusche.app.domain.UserProfileEntity;
import de.krusche.app.repository.UserProfileRepository;
import de.krusche.app.repository.UserRepository;
import de.krusche.app.service.dto.UserProfileDTO;
import de.krusche.app.service.mapper.UserProfileMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserProfileService {

    private final UserProfileMapper userProfileMapper;
    private final UserProfileRepository userProfileRepository;
    private final UserRepository userRepository;

    public UserProfileService(UserProfileMapper userProfileMapper,
                              UserProfileRepository userProfileRepository, UserRepository userRepository) {
        this.userProfileMapper = userProfileMapper;
        this.userProfileRepository = userProfileRepository;
        this.userRepository = userRepository;
    }

    public UserProfileDTO getUserProfileDTO(Long userId) {
        Optional<UserProfileEntity> profileEntityOptional = userProfileRepository
            .findByUser(userRepository.findById(userId).orElseThrow(IllegalArgumentException::new));
        if (profileEntityOptional.isPresent()) {
            return userProfileMapper.userProfileToUserProfileDTO(profileEntityOptional.get());
        } else {
            return new UserProfileDTO();
        }
    }

    public UserProfileEntity createOrUpdateProfile(UserProfileDTO dto) {

        Optional<UserProfileEntity> entityOptional = userProfileRepository.findByUser(userRepository.findById(dto.getUserId()).orElseThrow(IllegalArgumentException::new));

        if (!entityOptional.isPresent()) {
            return createNewProfile(dto);
        } else {
            return updateProfile(dto);
        }
    }

    private UserProfileEntity updateProfile(UserProfileDTO dto) {
        UserProfileEntity entity = userProfileMapper.dtoToEntity(dto);
        entity.setId(dto.getUserId());
        userProfileRepository.save(entity);
        return entity;
    }

    private UserProfileEntity createNewProfile(UserProfileDTO dto) {
        UserProfileEntity entity = userProfileMapper.dtoToEntity(dto);
        return userProfileRepository.save(entity);
    }
}
