import { Form, Row, Col, Button } from 'react-bootstrap';

const AddSession = ({ id }) => {
    return (
        <div>
            <h2>Add a session</h2>
            <hr />
            <Form>
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="sequenceId"
                >
                    <Form.Label column sm={2}>
                        Sequence ID
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Order of the session (1, 2, 3 etc.)" />
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="name"
                >
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Name of the session" />
                    </Col>
                </Form.Group>
                
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="speaker"
                >
                    <Form.Label column sm={2}>
                        Speaker(s)
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Names of the speakers for the session" />
                    </Col>
                </Form.Group>
                
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="duration"
                >
                    <Form.Label column sm={2}>
                        Duration
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>
                
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="level"
                >
                    <Form.Label column sm={2}>
                        Level
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select aria-label="Select a level">
                            <option>Open this select menu</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="asbtract"
                >
                    <Form.Label column sm={2}>
                        Asbtract
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Add a session</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddSession;
