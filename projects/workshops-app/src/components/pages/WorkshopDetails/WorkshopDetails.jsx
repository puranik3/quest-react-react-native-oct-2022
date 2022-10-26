import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
                            <span className="visually-hidden">Loading workshops' details...</span>
                        </div>
                    </div>
                )
            }
            {
                !loading && workshop && (
                    <>
                        <div className="row">
                            {workshop.name}
                        </div>
                    </>
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