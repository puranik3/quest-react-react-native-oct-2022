import { rest } from 'msw';
import workshops from './data/workshops';

const handlers = [
    rest.get( `https://workshops-server.herokuapp.com/workshops`, ( req, res, ctx ) => {
        return res(
            ctx.status( 200 ),
            ctx.json( workshops.slice( 0, 10 ) )
        );
    })
];


const errorHandlers = [
    rest.get( `https://workshops-server.herokuapp.com/workshops`, ( req, res, ctx ) => {
        return res(
            ctx.status( 500 ),
            ctx.json()
        );
    })
];

export {
    handlers,
    errorHandlers
};