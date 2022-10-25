import { Link } from 'react-router-dom';

const WorkshopsListItem = ( { workshop } ) => {
    return (
        <div className="card p-3" style={{width: '100%'}}>
            <img src={workshop.imageUrl} className="card-img-top" alt={workshop.name} />
            <div className="card-body">
                <h5 className="card-title">{workshop.name}</h5>
                <p className="card-text">{workshop.location.city}, {workshop.location.state}</p>
                <Link to={"/workshops/" + workshop.id} className="btn btn-primary">Know more</Link>
            </div>
        </div>
    );
};

export default WorkshopsListItem;