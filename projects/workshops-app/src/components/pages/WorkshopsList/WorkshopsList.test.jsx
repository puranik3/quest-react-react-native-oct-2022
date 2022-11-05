import WorkshopsList from "./WorkshopsList";
import { render, screen } from '@testing-library/react';
import workshops from '../../../mocks/data/workshops';

describe( 'WorkshopsList', () => {
    describe( 'on load', () => {
        test( 'should show the loading message', () => {
            render( <WorkshopsList /> );
    
            const loadingMessage = screen.getByText( 'Loading...' );
            expect( loadingMessage ).toBeInTheDocument();
        });

        test( 'should fetch and show the workshops', async () => {
            render( <WorkshopsList /> );

            for( let i = 0; i < 10; i++ ) {
                const workshopItemTitle = await screen.findByText( workshops[i].name );
            }
        });
    });
});