package com.example.springtemplate.daos;

import com.example.springtemplate.models.Endorsement;
import com.example.springtemplate.repositories.EndorsementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EndorsementOrmDao {
    @Autowired
    EndorsementRepository endorsementRepository;

    @PostMapping("/api/endorsements")
    public Endorsement createEndorsement(@RequestBody Endorsement endorsement) {
        return endorsementRepository.save(endorsement);
    }

    @GetMapping("/api/endorsements")
    public List<Endorsement> findAllEndorsements() {
        return endorsementRepository.findAllEndorsements();
    }

    @GetMapping("/api/endorsements/{endorsementId}")
    public Endorsement findEndorsementById(
            @PathVariable("endorsementId") Integer id) {
        return endorsementRepository.findEndorsementById(id);
    }

    @GetMapping("/api/endorsements/player/{playerId}")
    public List<Endorsement> findEndorsementsByPlayerId(
            @PathVariable("playerId") Integer id) {
        return endorsementRepository.findEndorsementsByPlayerId(id);
    }

    @PutMapping("/api/endorsements/{endorsementId}")
    public Endorsement updateUser(
            @PathVariable("endorsementId") Integer id,
            @RequestBody Endorsement endorsementUpdates) {
        Endorsement endorsement = endorsementRepository.findEndorsementById(id);
        endorsement.setEndorsementId(endorsementUpdates.getEndorsementId());
        endorsement.setEndorsementCompanyName(endorsementUpdates.getEndorsementCompanyName());
        endorsement.setEndorsementContractDuration(endorsementUpdates.getEndorsementContractDuration());
        endorsement.setEndorsementPlayerId(endorsementUpdates.getEndorsementPlayerId());


        return endorsementRepository.save(endorsement);
    }

    @DeleteMapping("/api/endorsements/{endorsementId}")
    public void deleteUser(
            @PathVariable("endorsementId") Integer id) {
        endorsementRepository.deleteById(id);
    }
}
