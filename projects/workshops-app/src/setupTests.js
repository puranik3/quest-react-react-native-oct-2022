// for enzyme-based tests
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import util from 'util';

// for testing-library based tests
import server from './mocks/server';
import '@testing-library/jest-dom';

// enzyme-specific setup
Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global, 'TextEncoder', {
    value: util.TextEncoder,
});

// testing-library-specific setup
// start the mock server before every test file runs
beforeAll( () => server.listen() );
afterAll( () => server.close() );