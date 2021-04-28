package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer playerId;
    private Integer jerseyNumber;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Date dob;
    private Integer teamId;
    private Integer positionId;
    private String profilePicture;

    //private String profilePicture;
    //private String handle;

    public Integer getPlayerJerseyNumber() { return jerseyNumber; }
    public void setPlayerJerseyNumber(Integer jerseyNumber) { this.jerseyNumber = jerseyNumber; }

    public Integer getId() { return playerId; }
    public void setId(Integer playerId) { this.playerId = playerId; }

    public String getPlayerFirstName() { return firstName; }
    public void setPlayerFirstName(String firstName) { this.firstName = firstName; }

    public String getPlayerLastName() { return lastName; }
    public void setPlayerLastName(String lastName) { this.lastName = lastName; }

    public String getPlayerUsername() { return username; }
    public void setPlayerUsername(String username) { this.username = username; }

    public String getPlayerPassword() { return password; }
    public void setPlayerPassword(String password) { this.password = password; }

    public String getPlayerEmail() { return password; }
    public void setPlayerEmail(String password) { this.password = password; }

    public Date getPlayerDob() { return dob; }
    public void setPlayerDob(Date dob) { this.dob = dob; }


    public Integer getPlayerTeamId() { return teamId; }
    public void setPlayerTeamId(Integer teamId) { this.teamId = teamId; }

    public Integer getPlayerPositionId() { return positionId; }
    public void setPlayerPositionId(Integer positionId) { this.positionId = positionId; }

    public String getPlayerProfilePicture() { return profilePicture; }
    public void setPlayerProfilePicture(String profilePicture) { this.profilePicture = profilePicture; }

    //public String getHandle() { return handle; }
    //public void setHandle(String handle) { this.handle = handle; }

    public Player(String username, String password, Integer jerseyNumber, String first_name, String last_name, String email,
                  Date dob, Integer teamId, Integer positionId, String profilePicture) {
        this.jerseyNumber = jerseyNumber;
        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.dob = dob;
        this.teamId = teamId;
        this.positionId = positionId;
        this.profilePicture = profilePicture;
    }

    public Player() {}
}