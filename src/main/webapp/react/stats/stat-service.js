const STATS_URL = "http://localhost:8080/api/stats"

export const findAllStats = () => fetch(STATS_URL).then(response => response.json())

export const findStatById = (id) => fetch(`${STATS_URL}/${id}`).then(response => response.json())

export const findStatByPlayerId = (id) => fetch(`${STATS_URL}/player/${id}`).then(response => response.json())

export const deleteStat = (id) => fetch(`${STATS_URL}/${id}`, {method: "DELETE"})

export const createStat = (stat) => fetch(STATS_URL, {method: 'POST', body: JSON.stringify(stat), headers: {'content-type': 'application/json'}}).then(response => response.json())

export const updateStat = (id, stat) =>  fetch(`${STATS_URL}/${id}`, {method: 'PUT', body: JSON.stringify(stat), headers: {'content-type': 'application/json'}}).then(response => response.json())

export default {
    findAllStats,
    findStatById,
    deleteStat,
    createStat,
    updateStat,
    findStatByPlayerId
}