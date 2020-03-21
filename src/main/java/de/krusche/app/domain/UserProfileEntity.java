package de.krusche.app.domain;


import javax.persistence.*;

@Entity
@Table(name = "user_profile")
public class UserProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @OneToOne
    @JoinColumn(name = "jhi_user_id")
    private User user;

    private String firstname;

    private String lastname;

    private String address;

    private Long experienceInYears;

//    private List<String> workingStylePreference;
//    private List<String> professionalExperience;
//    private List<String> interests;
    private String aboutMe;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getExperienceInYears() {
        return experienceInYears;
    }

    public void setExperienceInYears(Long experienceInYears) {
        this.experienceInYears = experienceInYears;
    }

//    public List<String> getWorkingStylePreference() {
//        return workingStylePreference;
//    }
//
//    public void setWorkingStylePreference(List<String> workingStylePreference) {
//        this.workingStylePreference = workingStylePreference;
//    }
//
//    public List<String> getProfessionalExperience() {
//        return professionalExperience;
//    }
//
//    public void setProfessionalExperience(List<String> professionalExperience) {
//        this.professionalExperience = professionalExperience;
//    }
//
//    public List<String> getInterests() {
//        return interests;
//    }
//
//    public void setInterests(List<String> interests) {
//        this.interests = interests;
//    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
