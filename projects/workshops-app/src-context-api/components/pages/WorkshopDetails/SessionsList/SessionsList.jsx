import { useState, useEffect } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SessionsListItem from './SessionsListItem/SessionsListItem';

import useFilter from '../../../../hooks/useFilter';

import { getSessionsForWorkshopWithId, vote as voteSvc } from '../../../../services/sessions';

// we have created this array outside the component to avoid creating a new array to be passed to useFilter every time the component re-renders. Since useFilter sets a state, passing a new array will cause re-render, and the recursive call chain continues. We must avoid this.
const sessionFilteringKeys = [ 'name', 'abstract' ];

const SessionsList = ( { id } ) => {
    const [ loading, setLoading ] = useState( true );
    const [ sessions, setSessions ] = useState( [] );
    const [ error, setError ] = useState( null );

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

    const {
        filterKey,
        setFilterKey,
        // destructure filteredItems but create a variable called filteredSessions
        filteredItems : filteredSessions
    } = useFilter( sessions, sessionFilteringKeys );

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