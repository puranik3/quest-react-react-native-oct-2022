import { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';

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
                                    <div className="my-2">{workshop.time}</div>
                                </Col>
                                <Col></Col>
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
        </>
    );
}
 
export default WorkshopDetails;