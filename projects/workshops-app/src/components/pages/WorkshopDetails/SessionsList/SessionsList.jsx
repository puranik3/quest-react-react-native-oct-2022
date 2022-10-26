import { useState, useEffect } from 'react';

import { getSessionsForWorkshopWithId } from '../../../../services/sessions';

const SessionsList = ( { id } ) => {
    const [ loading, setLoading ] = useState( true );
    const [ sessions, setSessions ] = useState( [] );
    const [ error, setError ] = useState( null );

    useEffect(
        () => {
            const helper = async () => {
                try {
                    const data = await getSessionsForWorkshopWithId( id );
                    setSessions( data );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            }

            // when page loads, the id will be null and we do not want to make a call to the backend as we do not have workshop id yet
            if( id ) {
                helper();
            }
        },
        [ id ] // run the effect whenever a new value for id is sent as prop from the details component
    );

    return (
        <div>
            <h2>List of sessions</h2>
            <hr />
            {
                sessions.map(
                    session => (
                        <div key={session.id}>{session.name}</div>
                    )
                )
            }
        </div>
    );
};
 
export default SessionsList;