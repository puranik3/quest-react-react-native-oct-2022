import { Row, Col, ListGroupItem, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SessionsListItem = ( { name, speaker, level, duration, abstract, upvoteCount, id, workshopId, sequenceId } ) => {
    return (
        <ListGroupItem>
            <Row>
                <Col xs={1} className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faCaretUp} size="2x" />
                    {upvoteCount}
                    <FontAwesomeIcon icon={faCaretDown} size="2x" />
                </Col>
                <Col xs={11}>
                    <div className="mb-2">{name}</div>
                    <div className="mb-2">
                        <strong>by {speaker}</strong>
                    </div>
                    <div className="mb-2">
                        <Badge bg="primary">{level}</Badge>
                    </div>
                    <div className="mb-2">{duration} hours</div>
                    <div className="mb-2">{abstract}</div>
                </Col>
            </Row>
        </ListGroupItem>
    );
}
 
export default SessionsListItem;