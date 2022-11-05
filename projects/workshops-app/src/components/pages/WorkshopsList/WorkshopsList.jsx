import { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import WorkshopsListItem from "./WorkshopsListItem/WorkshopsListItem";

import { getWorkshops } from '../../../services/workshops';

import useFilter from '../../../hooks/useFilter';

const sessionFilteringKeys = [ 'name' ];

const WorkshopsList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ workshops, setWorkshops ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ page, setPage ] = useState( 1 );

    const nextPage = () => {
        if( workshops.length !== 10 ) {
            return;
        }

        setPage( page + 1 );
    };
    
    const previousPage = () => {
        if( page <= 1 ) {
            return;
        }

        setPage( page - 1 );
    };

    useEffect(
        () => { // side-effect
            const helper = async () => {
                setLoading( true );

                try {
                    const data = await getWorkshops( page );
                    setWorkshops( data );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            }

            helper();
        },
        [ page ]
    );

    const {
        filterKey,
        setFilterKey,
        filteredItems : filteredWorkshops
    } = useFilter( workshops, sessionFilteringKeys );

    return (
        <>
            <h1>List of Workshops</h1>
            <hr />

            <Form.Control
                type="search"
                placeholder="Filter by workshop name"
                className="my-3"
                onChange={( event ) => setFilterKey( event.target.value )}
                value={filterKey}
            />

            <div className="my-3">You typed: {filterKey}</div>

            {
                loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            {
                !loading && workshops.length !== 0 && (
                    <>
                        <button
                            className="btn btn-primary btn-sm my-3"
                            onClick={previousPage}
                            disabled={page <= 1}
                        >
                            Previous page
                        </button>
                        <button
                            className="btn btn-primary btn-sm my-3"
                            onClick={nextPage}
                            disabled={workshops.length < 10}
                        >
                            Next page
                        </button>
                        <p>You are viewing results on page {page}</p>
                        <Row xs={1} lg={3}>
                        {
                            filteredWorkshops.map(
                                workshop => (
                                    <Col className="d-flex my-2" key={workshop.id}>
                                        <WorkshopsListItem workshop={workshop} />
                                    </Col>
                                )
                            )
                        }
                        </Row>
                    </>
                )
            }
            {
                !loading && error && (
                    <div className="alert alert-danger" role="alert" data-testid="error-message">
                        {error.message}
                        {/*error.response.data*/}
                    </div>
                )
            }
        </>
    );
};

export default WorkshopsList