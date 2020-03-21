package de.krusche.app.web.rest;

import de.krusche.app.service.UserProfileService;
import de.krusche.app.service.dto.UserProfileDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class UserProfileResource {

    private UserProfileService userProfileService;

    public UserProfileResource(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping("/userprofile/{id}")
//    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<UserProfileDTO> getProfile(@PathVariable("id") Long id) {
        UserProfileDTO dto = userProfileService.getUserProfileDTO(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("/userprofile")
    public ResponseEntity<?> createProfile(@RequestBody UserProfileDTO dto) {
        try {
            return new ResponseEntity<>(userProfileService.createOrUpdateProfile(dto), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
