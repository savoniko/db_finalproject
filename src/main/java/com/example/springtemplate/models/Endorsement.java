package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="endorsements")
public class Endorsement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer endorsementId;
    private String companyName;
    private Integer contractDuration;
    private Integer playerId;

    public Integer getEndorsementId() {
        return endorsementId;
    }

    public void setEndorsementId(Integer endorsementId) {
        this.endorsementId = endorsementId;
    }

    public String getEndorsementCompanyName() {
        return companyName;
    }

    public void setEndorsementCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Integer getEndorsementContractDuration() {
        return contractDuration;
    }

    public void setEndorsementContractDuration(Integer contractDuration) {
        this.contractDuration = contractDuration;
    }

    public Integer getEndorsementPlayerId() {
        return playerId;
    }

    public void setEndorsementPlayerId(Integer playerId) {
        this.playerId = playerId;
    }


    public Endorsement(Integer endorsementId, String companyName, Integer contractDuration,
                        Integer playerId) {
        this.endorsementId = endorsementId;
        this.companyName = companyName;
        this.contractDuration = contractDuration;
        this.playerId = playerId;
    }

    public Endorsement() {}
}