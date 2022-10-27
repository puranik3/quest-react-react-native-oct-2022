import axios from 'axios';

const getSessionsForWorkshopWithId = async ( id ) => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops/${id}/sessions` );
    return response.data;
};

const vote = async ( sessionId, voteType ) => {
    const response = await axios.put( `https://workshops-server.herokuapp.com/sessions/${sessionId}/${voteType}` );
    return response.data;
};

export {
    getSessionsForWorkshopWithId,
    vote
};