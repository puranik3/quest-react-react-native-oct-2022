import WorkshopsList from "./WorkshopsList";
import { render, screen } from '@testing-library/react';
import { AllProviders } from "../../../test-utils/utils";
import workshops from '../../../mocks/data/workshops';
import server from '../../../mocks/server';
import { errorHandlers } from '../../../mocks/handlers';
import userEvent from '@testing-library/user-event'

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

        test( 'should display an error message when call to fetch workshops fails', async () => {
            server.use( ...errorHandlers );

            render(
                <AllProviders>
                    <WorkshopsList />
                </AllProviders>
            );

            const errorMessage = await screen.findByTestId( 'error-message' );
            expect( errorMessage ).toBeInTheDocument();
        });
    });

    describe( 'pagination', () => {
        test( 'shows the next page of workshops when the Next button is clicked', async () => {
            render(
                <AllProviders>
                    <WorkshopsList />
                </AllProviders>
            );

            const nextButton = await screen.findByRole( 'button', { name: 'Next page' } );
            userEvent.click( nextButton );

            for( let i = 10; i < 12; i++ ) {
                const workshopItemTitle = await screen.findByText( workshops[i].name );
                expect( workshopItemTitle ).toBeInTheDocument();
            }
        });

        test( 'shows the previous page of workshops when the Next button is clicked', async () => {

        });
    })
});