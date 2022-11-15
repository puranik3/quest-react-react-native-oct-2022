import axios from 'axios';

const getSessionsForWorkshop = async ( id ) => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops/${id}/sessions` );

    return response.data;
};

const addSession = async ( session ) => {
    const response = await axios.post(
        `https://workshops-server.herokuapp.com/sessions`,
        session,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
}

export {
    getSessionsForWorkshop,
    addSession
};