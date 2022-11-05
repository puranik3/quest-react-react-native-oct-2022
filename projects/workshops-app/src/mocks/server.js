import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// pass the individsual items within the array as arguments (using the rest, i.e. ... operator)
const server = setupServer( ...handlers );

export default server;