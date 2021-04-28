package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Endorsement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EndorsementRepository
        extends CrudRepository<Endorsement, Integer> {
    @Query(value = "SELECT * FROM endorsements",
            nativeQuery = true)
    public List<Endorsement> findAllEndorsements();

    @Query(value = "SELECT * FROM endorsements WHERE endorsement_id=:endorsementId",
            nativeQuery = true)
    public Endorsement findEndorsementById(@Param("endorsementId") Integer id);

    @Query(value = "SELECT * FROM endorsements WHERE player_id=:playerId",
            nativeQuery = true)
    public List<Endorsement> findEndorsementsByPlayerId(@Param("playerId") Integer id);

}