import WorkshopsList from "./WorkshopsList";
import { render, screen } from '@testing-library/react';

describe( 'WorkshopsList', () => {
    test( 'should show the loading message initially', () => {
        render( <WorkshopsList /> );

        const loadingMessage = screen.getByText( 'Loading...' );
        expect( loadingMessage ).toBeInTheDocument();
    });
});