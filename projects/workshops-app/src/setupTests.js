// for enzyme-based tests
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import util from 'util';

// for testing-library based tests
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global, 'TextEncoder', {
    value: util.TextEncoder,
});