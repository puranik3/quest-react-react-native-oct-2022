import { useState, useEffect } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SessionsListItem from './SessionsListItem/SessionsListItem';

import { getSessionsForWorkshopWithId, vote as voteSvc } from '../../../../services/sessions';

const SessionsList = ( { id } ) => {
    const [ loading, setLoading ] = useState( true );
    const [ sessions, setSessions ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ filterKey, setFilterKey ] = useState( '' );
    const [ filteredSessions, setFilteredSessions ] = useState( [] );

    const vote = async ( sessionId, voteType ) => {
        try {
            const updatedSession = await voteSvc( sessionId, voteType );
            const newSessions = sessions.map( session => session.id !== sessionId ? session : updatedSession );
            
            setSessions( newSessions );
            
            toast.success( `Your vote for ${updatedSession.name} has been registered` );
        } catch( error ) {
            toast.error( error.message );
        }
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

    useEffect(
        () => {
            setFilteredSessions(
                sessions.filter(
                    session => session.name.toLowerCase().includes( filterKey.toLowerCase() ) || session.abstract.toLowerCase().includes( filterKey.toLowerCase() )
                )
            );
        },
        [ sessions, filterKey ]
    );

    return (
        <div>
            <h2>List of sessions</h2>
            <hr />
            
            <Form.Control
                type="search"
                placeholder="Filter by session name, abstract"
                className="my-3"
                onChange={( event ) => setFilterKey( event.target.value )}
                value={filterKey}
            />
            
            <div className="my-3">You typed: {filterKey}</div>
            
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
                            filteredSessions.map(
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