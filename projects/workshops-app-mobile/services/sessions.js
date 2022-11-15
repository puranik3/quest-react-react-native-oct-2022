import axios from 'axios';

const getSessionsForWorkshop = async ( id ) => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops/${id}/sessions` );

    return response.data;
};
export {
    getSessionsForWorkshop
};