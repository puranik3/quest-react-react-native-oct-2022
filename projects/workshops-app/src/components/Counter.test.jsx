import Counter from './Counter';
import { render } from 'enzyme';

describe( 'Counter component', () => {
    it( 'should setup initial state correctly', () => {
        render( <Counter initialValue={0} /> );
    })
});