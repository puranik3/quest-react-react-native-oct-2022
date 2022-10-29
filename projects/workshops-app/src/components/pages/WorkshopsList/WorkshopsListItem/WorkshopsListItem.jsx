import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WorkshopsListItem = ( { workshop, theme } ) => {
    return (
        <Card
            bg={theme}
            text={theme === 'light' ? 'dark' : 'white'}
            style={{ width: '100%' }}
            className="p-3"
        >
            <Card.Img src={workshop.imageUrl} alt={workshop.name} />
            <Card.Body>
            <Card.Title>{workshop.name}</Card.Title>
            <Card.Text>
                <p className="card-text">{workshop.location.city}, {workshop.location.state}</p>
                <Link to={"/workshops/" + workshop.id} className="btn btn-primary">Know more</Link>
            </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WorkshopsListItem;