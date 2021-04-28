package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlayerOrmDao {
    @Autowired
    PlayerRepository playerRepository;

    @PostMapping("/api/players")
    public Player createPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    @GetMapping("/api/players")
    public List<Player> findAllPlayers() {
        return playerRepository.findAllPlayers();
    }

    @GetMapping("/api/players/{playerId}")
    public Player findPlayerById(
            @PathVariable("playerId") Integer id) {
        return playerRepository.findPlayerById(id);
    }

    @PutMapping("/api/players/{playerId}")
    public Player updateUser(
            @PathVariable("playerId") Integer id,
            @RequestBody Player playerUpdates) {
        Player player = playerRepository.findPlayerById(id);
        player.setPlayerJerseyNumber(playerUpdates.getPlayerJerseyNumber());
        player.setPlayerFirstName(playerUpdates.getPlayerFirstName());
        player.setPlayerLastName(playerUpdates.getPlayerLastName());
        player.setPlayerUsername(playerUpdates.getPlayerUsername());
        player.setPlayerPassword(playerUpdates.getPlayerPassword());
        player.setPlayerEmail(playerUpdates.getPlayerEmail());
        player.setPlayerDob(playerUpdates.getPlayerDob());
        player.setPlayerTeamId(playerUpdates.getPlayerTeamId());
        player.setPlayerPositionId(playerUpdates.getPlayerPositionId());
        player.setPlayerProfilePicture(playerUpdates.getPlayerProfilePicture());

        return playerRepository.save(player);
    }

    @DeleteMapping("/api/players/{playerId}")
    public void deleteUser(
            @PathVariable("playerId") Integer id) {
        playerRepository.deleteById(id);
    }
}