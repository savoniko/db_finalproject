package com.example.springtemplate.daos;

import com.example.springtemplate.models.Stat;
import com.example.springtemplate.repositories.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StatOrmDao {
    @Autowired
    StatRepository statRepository;

    @PostMapping("/api/stats")
    public Stat createStat(@RequestBody Stat stat) {
        return statRepository.save(stat);
    }

    @GetMapping("/api/stats")
    public List<Stat> findAllStats() {
        return statRepository.findAllStats();
    }

    @GetMapping("/api/stats/{statId}")
    public Stat findStatById(
            @PathVariable("statId") Integer id) {
        return statRepository.findStatById(id);
    }

    @GetMapping("/api/stats/player/{playerId}")
    public Stat findStatByPlayerId(
            @PathVariable("playerId") Integer id) {
        return statRepository.findStatByPlayerId(id);
    }

    @PutMapping("/api/stats/{statId}")
    public Stat updateStat(
            @PathVariable("statId") Integer id,
            @RequestBody Stat statUpdates) {
        Stat stat = statRepository.findStatById(id);
        stat.setStatId(statUpdates.getStatId());
        stat.setPointsPerGame(statUpdates.getPointsPerGame());
        stat.setReboundsPerGame(statUpdates.getReboundsPerGame());
        stat.setAssistsPerGame(statUpdates.getAssistsPerGame());
        stat.setFieldGoalPercentage(statUpdates.getFieldGoalPercentage());
        stat.setThreePtFieldGoalPercentage(statUpdates.getThreePtFieldGoalPercentage());
        stat.setFreeThrowPercentage(statUpdates.getFreeThrowPercentage());
        stat.setStealsPerGame(statUpdates.getStealsPerGame());
        stat.setBlocksPerGame(statUpdates.getBlocksPerGame());
        stat.setPlayerId(statUpdates.getPlayerId());

        return statRepository.save(stat);
    }

    @DeleteMapping("/api/stats/{statId}")
    public void deleteUser(
            @PathVariable("statId") Integer id) {
        statRepository.deleteById(id);
    }
}
