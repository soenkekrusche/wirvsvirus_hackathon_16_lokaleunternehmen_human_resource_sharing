package de.krusche.app.service.mapper;

import de.krusche.app.domain.UserProfileEntity;
import de.krusche.app.service.dto.UserProfileDTO;
import org.springframework.stereotype.Service;

@Service
public class UserProfileMapper {

    public UserProfileDTO userProfileToUserProfileDTO(UserProfileEntity userProfile) {

        UserProfileDTO dto = new UserProfileDTO();

        dto.setAboutMe(userProfile.getAboutMe());
        dto.setAddress(userProfile.getAddress());
        dto.setExperienceInYears(userProfile.getExperienceInYears());
        dto.setFirstname(userProfile.getFirstname());
        dto.setLastname(userProfile.getLastname());
        dto.setUserId(userProfile.getUser().getId());
        dto.setId(userProfile.getId());
//        dto.setInterests(userProfile.getInterests());
//        dto.setProfessionalExperience(userProfile.getProfessionalExperience());
//        dto.setWorkingStylePreference(userProfile.getWorkingStylePreference());

        return dto;
    }

    public UserProfileEntity dtoToEntity(UserProfileDTO dto) {

        UserProfileEntity entity = new UserProfileEntity();

        entity.setAboutMe(dto.getAboutMe());
        entity.setAddress(dto.getAddress());
        entity.setExperienceInYears(dto.getExperienceInYears());
        entity.setFirstname(dto.getFirstname());
        entity.setLastname(dto.getLastname());
        entity.setId(dto.getId());
//        entity.setInterests(dto.getInterests());
//        entity.setProfessionalExperience(dto.getProfessionalExperience());
//        entity.setWorkingStylePreference(dto.getWorkingStylePreference());

        return entity;
    }
}
