import WorkshopsList from "./WorkshopsList";
import { render, screen } from '@testing-library/react';
import { AllProviders } from "../../../test-utils/utils";
import workshops from '../../../mocks/data/workshops';


describe( 'WorkshopsList', () => {
    describe( 'on load', () => {
        test( 'should show the loading message', () => {
            render( <WorkshopsList /> );
    
            const loadingMessage = screen.getByText( 'Loading...' );
            expect( loadingMessage ).toBeInTheDocument();
        });

        test( 'should fetch and show the workshops', async () => {
            render(
                <AllProviders>
                    <WorkshopsList />
                </AllProviders>
            );

            for( let i = 0; i < 10; i++ ) {
                // we use find*() methods when we expect to element to appear after a delay (asynchronous)
                const workshopItemTitle = await screen.findByText( workshops[i].name );
                expect( workshopItemTitle ).toBeInTheDocument();
            }

            // we use query*() methods when we expect an element NOT to be present (get*() methods will fail in such case)
            const loadingMessage = screen.queryByText( 'Loading...' );
            expect( loadingMessage ).not.toBeInTheDocument();
        });
    });
});