import axios from 'axios';

const getWorkshops = async ( page ) => {
    const response = await axios.get(
        `https://workshops-server.herokuapp.com/workshops`,
        {
            params: {
                _page: page
            }
        }
    );
    return response.data;
};

const getWorkshopById = async ( id ) => {
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops/${id}` );
    return response.data;
};

// named exports
export {
    getWorkshops,
    getWorkshopById
};