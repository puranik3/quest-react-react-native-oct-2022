import WorkshopsList from "./WorkshopsList";
import { render, screen } from '@testing-library/react';

describe( 'WorkshopsList', () => {
    describe( 'on load', () => {
        test( 'should show the loading message', () => {
            render( <WorkshopsList /> );
    
            const loadingMessage = screen.getByText( 'Loading...' );
            expect( loadingMessage ).toBeInTheDocument();
        });

        test( 'should fetch and show the workshops', () => {
            render( <WorkshopsList /> );

            for( let i = 0; i < 10; i++ ) {
                
            }
        });
    });
});