import themeReducer from './theme';
import { TOGGLE_THEME } from "../actions/constants";

// group the tests in a "test suite"
describe( 'themeReducer', () => {
    let state;

    // common arrange (setup) - the function passed shall run before each test function runs
    beforeEach(() => {
        state = {
            theme: 'light'
        };
    });

    test( 'should toggle the theme when TOGGLE_THEME action is dispatched', () => {
        // arrange (setup)
        const action = {
            type: TOGGLE_THEME
        };
    
        // act
        const newState = themeReducer( state, action );
    
        // assert
        // expect( 1 + 1 ).toBe( 2 );
        expect( newState ).toEqual({
            theme: 'dark'
        });
    } );
    
    test( 'should NOT toggle the theme when an action other than TOGGLE_THEME action is dispatched', () => {
        // arrange
        const action = {
            type: 'DUMMY'
        };
    
        // act
        const newState = themeReducer( state, action );
    
        // assert
        // expect( 1 + 1 ).toBe( 2 );
        expect( newState ).toEqual({
            theme: 'light'
        });
    } );
});