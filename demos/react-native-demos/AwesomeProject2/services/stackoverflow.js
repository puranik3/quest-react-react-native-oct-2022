import axios from 'axios';

const getQuestions = async ( page = 1, pagesize =  30 ) => {
    let options = {
        params: {
            site: 'stackoverflow'
        }
    };

    if( page ) {
        options = {
            params: {
                ...options.params,
                page, // page: page
                pagesize, // pagesize: pagesize
            }
        }
    };

    const response = await axios.get( `https://api.stackexchange.com/2.0/questions`, options );

    // items property in the response has the list of questions
    return response.data.items;
};

export {
    getQuestions
};