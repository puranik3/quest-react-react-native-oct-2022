import Counter from './Counter';
import { shallow } from 'enzyme';

describe( 'Counter component', () => {
    it( 'should setup initial state correctly', () => {
        // shallow does a "shallow rendering" -> child components are not rendered -> this makes rendering fast and the test run faster
        const wrapper = shallow( <Counter initialValue={0} /> );

        expect( wrapper.state() ).toEqual({
            value: 0
        });
    });

    it( 'increments value when increment button is clicked', () => {
        const wrapper = shallow( <Counter initialValue={0} /> );

        wrapper.find( '#increment' ).simulate( 'click' );

        expect( wrapper.state().value ).toEqual( 1 );
    });

    it( 'shows the value on change', () => {
        const wrapper = shallow( <Counter initialValue={0} /> );

        expect( wrapper.find( '#value' ).text() ).toBe( '0' );

        wrapper.find( '#increment' ).simulate( 'click' );

        expect( wrapper.find( '#value' ).text() ).toBe( '1' );
    });
});