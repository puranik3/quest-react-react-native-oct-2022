import { ListGroupItem } from 'react-bootstrap';

const SessionsListItem = ( { name, speaker, level, duration, abstract, upvoteCount, id, workshopId, sequenceId } ) => {
    return (
        <ListGroupItem>
            {name}
        </ListGroupItem>
    );
}
 
export default SessionsListItem;