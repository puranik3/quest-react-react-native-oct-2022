import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import SessionsList from './SessionsList/SessionsList';
import AddSession from './AddSession/AddSession';

import { getWorkshopById } from '../../../services/workshops';

const WorkshopDetails = () => {
    // hooks / custom hooks MUST be used directly within a function component's function body (and never inside a function within it, a loop, a, if block etc.)
    const { id } = useParams(); // { id: '2' }

    const [ loading, setLoading ] = useState( true );
    const [ workshop, setWorkshop ] = useState( null );
    const [ error, setError ] = useState( null );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getWorkshopById( id );
                    setWorkshop( data );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            }

            helper();
        },
        [ id ]
    );

    return (
        <>
            <h1>{workshop?.name || 'Details of the workshop'}</h1>
            <hr />
            {
                loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading workshop's details...</span>
                        </div>
                    </div>
                )
            }
            {
                !loading && workshop && (
                    <Row>
                        <Col xs={12} lg={4}>
                            <Image src={workshop.imageUrl} alt={workshop.name} fluid />
                        </Col>
                        <Col xs={12} lg={8}>
                            <Row xs={2} lg={4} className="text-sm">
                                <Col>
                                    <div>
                                        <Moment format="MMM DD, yyyy">{workshop.startDate}</Moment>
                                        {' - '}
                                        <Moment format="MMM DD, yyyy">{workshop.endDate}</Moment>
                                    </div>
                                    <div className="my-3 text-muted">{workshop.time}</div>
                                </Col>
                                <Col>
                                    <div>
                                        <FontAwesomeIcon
                                            className="me-2"
                                            icon={workshop.modes.inPerson ? faCheck : faTimes}
                                        />
                                        In-person
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            className="me-2"
                                            icon={workshop.modes.online ? faCheck : faTimes}
                                        />
                                        Online
                                    </div>
                                </Col>
                            </Row>
                            <div className="row" dangerouslySetInnerHTML={{ __html: workshop.description }} />
                        </Col>
                    </Row>
                )
            }
            {
                !loading && error && (
                    <div className="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }

            {/* The "end" prop ensures a full match of the current URL to the link "to" URL is made during matching (otherwise a prefix match is made) */}
            <NavLink to={`/workshops/${id}`} end className="me-2">Sessions List</NavLink>
            <NavLink to={`/workshops/${id}/add`}>Add a session</NavLink>

            {/* "child routes" of /workshops/:id */}
            <Routes>
                <Route
                    path=""
                    element={<SessionsList id={id} />}
                />
                <Route
                    path="/add"
                    element={<AddSession id={id} />}
                />
            </Routes>
        </>
    );
}
 
export default WorkshopDetails;