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

export {
    getWorkshops
};