package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String profilePicture;
    private String handle;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getProfilePicture() { return profilePicture; }
    public void setProfilePicture(String profilePicture) { this.profilePicture = profilePicture; }
    public String getHandle() { return handle; }
    public void setHandle(String handle) { this.handle = handle; }

    public User(String username, String password, String first_name, String last_name, String profile_picture) {
        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.profilePicture = profile_picture;
    }

    public User() {}
}
