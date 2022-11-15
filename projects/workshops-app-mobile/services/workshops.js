import axios from 'axios';

const getWorkshops = async ( page ) => {
    let options = {};

    if( page ) {
        options = {
            params: {
                _page: page
            }
        }
    }
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops`, options );

    return response.data;
};

const getWorkshopById = async ( id ) => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops/${id}` );

    return response.data;
};

export {
    getWorkshops,
    getWorkshopById
};