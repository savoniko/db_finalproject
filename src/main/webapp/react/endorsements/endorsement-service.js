const ENDORSEMENTS_URL = "http://localhost:8080/api/endorsements"

export const findAllEndorsements = () => fetch(ENDORSEMENTS_URL).then(response => response.json())

export const findEndorsementById = (id) => fetch(`${ENDORSEMENTS_URL}/${id}`).then(response => response.json())

export const deleteEndorsement = (id) => fetch(`${ENDORSEMENTS_URL}/${id}`, {method: "DELETE"})

export const createEndorsement = (endorsement) => fetch(ENDORSEMENTS_URL, {method: 'POST', body: JSON.stringify(endorsement), headers: {'content-type': 'application/json'}}).then(response => response.json())

export const updateEndorsement = (id, endorsement) =>  fetch(`${ENDORSEMENTS_URL}/${id}`, {method: 'PUT', body: JSON.stringify(endorsement), headers: {'content-type': 'application/json'}}).then(response => response.json())

export const findEndorsementsByPlayerId = (id) => fetch(`${ENDORSEMENTS_URL}/player/${id}`).then(response => response.json())
export default {
    findAllEndorsements,
    findEndorsementById,
    deleteEndorsement,
    createEndorsement,
    updateEndorsement,
    findEndorsementsByPlayerId
}