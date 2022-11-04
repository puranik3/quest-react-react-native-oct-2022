import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import util from 'util';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(global, 'TextEncoder', {
    value: util.TextEncoder,
});