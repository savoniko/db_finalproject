package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Stat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StatRepository
        extends CrudRepository<Stat, Integer> {

    @Query(value = "SELECT * FROM stats",
            nativeQuery = true)
    public List<Stat> findAllStats();

    @Query(value = "SELECT * FROM stats WHERE stat_id=:statId",
            nativeQuery = true)
    public Stat findStatById(@Param("statId") Integer id);

    @Query(value = "SELECT * FROM stats WHERE player_id=:playerId",
            nativeQuery = true)
    public Stat findStatByPlayerId(@Param("playerId") Integer id);


}