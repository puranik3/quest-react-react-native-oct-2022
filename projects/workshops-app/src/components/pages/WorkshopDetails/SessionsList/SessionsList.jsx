import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import SessionsListItem from './SessionsListItem/SessionsListItem';

import { getSessionsForWorkshopWithId, vote as voteSvc } from '../../../../services/sessions';

const SessionsList = ( { id } ) => {
    const [ loading, setLoading ] = useState( true );
    const [ sessions, setSessions ] = useState( [] );
    const [ error, setError ] = useState( null );

    const vote = async ( sessionId, voteType ) => {
        const updatedSession = await voteSvc( sessionId, voteType );
        const newSessions = sessions.map( session => session.id !== sessionId ? session : updatedSession );
        
        setSessions( newSessions );
        
        alert( `Your vote for ${updatedSession.name} has been registered` );
    };

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

            helper();
        },
        [ id ] // run the effect whenever a new value for id is sent as prop from the details component
    );

    return (
        <div>
            <h2>List of sessions</h2>
            <hr />
            {
                loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading list of sessions for the workshop</span>
                        </div>
                    </div>
                )
            }
            {
                !loading && sessions.length !== 0 && (
                    <ListGroup>
                        {
                            sessions.map(
                                session => (
                                    <SessionsListItem
                                        key={session.id}
                                        {...session}
                                        vote={vote}
                                    />
                                )
                            )
                        }
                    </ListGroup>
                )
            }
            {
                !loading && error && (
                    <div className="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
        </div>
    );
};
 
export default SessionsList;