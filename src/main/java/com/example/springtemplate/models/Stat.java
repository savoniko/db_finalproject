package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="stats")
public class Stat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer statId;
    private Double pointsPerGame;
    private Double reboundsPerGame;
    private Double assistsPerGame;
    private Double fieldGoalPercentage;
    private Double threePtFieldGoalPercentage;
    private Double freeThrowPercentage;
    private Double stealsPerGame;
    private Double blocksPerGame;
    private Integer playerId;



    public Integer getStatId() {
        return statId;
    }

    public void setStatId(Integer statId) {
        this.statId = statId;
    }

    public Double getPointsPerGame() {
        return pointsPerGame;
    }

    public void setPointsPerGame(Double pointsPerGame) {
        this.pointsPerGame = pointsPerGame;
    }

    public Double getReboundsPerGame() {
        return reboundsPerGame;
    }

    public void setReboundsPerGame(Double reboundsPerGame) {
        this.reboundsPerGame = reboundsPerGame;
    }

    public Double getAssistsPerGame() {
        return assistsPerGame;
    }

    public void setAssistsPerGame(Double assistsPerGame) {
        this.assistsPerGame = assistsPerGame;
    }

    public Double getFieldGoalPercentage() {
        return fieldGoalPercentage;
    }

    public void setFieldGoalPercentage(Double fieldGoalPercentage) {
        this.fieldGoalPercentage = fieldGoalPercentage;
    }

    public Double getThreePtFieldGoalPercentage() {
        return threePtFieldGoalPercentage;
    }

    public void setThreePtFieldGoalPercentage(Double threePtFieldGoalPercentage) {
        this.threePtFieldGoalPercentage = threePtFieldGoalPercentage;
    }

    public Double getFreeThrowPercentage() {
        return freeThrowPercentage;
    }

    public void setFreeThrowPercentage(Double freeThrowPercentage) {
        this.freeThrowPercentage = freeThrowPercentage;
    }

    public Double getStealsPerGame() {
        return stealsPerGame;
    }

    public void setStealsPerGame(Double stealsPerGame) {
        this.stealsPerGame = stealsPerGame;
    }

    public Double getBlocksPerGame() {
        return blocksPerGame;
    }

    public void setBlocksPerGame(Double blocksPerGame) {
        this.blocksPerGame = blocksPerGame;
    }

    public Integer getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Integer playerId) {
        this.playerId = playerId;
    }



    public Stat(Integer statId, Double pointsPerGame, Double reboundsPerGame, Double assistsPerGame,
                Double fieldGoalPercentage, Double threePtFieldGoalPercentage, Double freeThrowPercentage,
                Double stealsPerGame, Double blocksPerGame, Integer playerId) {
        this.statId = statId;
        this.pointsPerGame = pointsPerGame;
        this.reboundsPerGame = reboundsPerGame;
        this.assistsPerGame = assistsPerGame;
        this.fieldGoalPercentage = fieldGoalPercentage;
        this.threePtFieldGoalPercentage = threePtFieldGoalPercentage;
        this.freeThrowPercentage = freeThrowPercentage;
        this.stealsPerGame = stealsPerGame;
        this.blocksPerGame = blocksPerGame;
        this.playerId = playerId;
    }

    public Stat(){

    }


}