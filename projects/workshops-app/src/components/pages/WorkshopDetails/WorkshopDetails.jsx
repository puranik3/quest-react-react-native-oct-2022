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
        <div>workshop details works! ({id})</div>
    );
}
 
export default WorkshopDetails;