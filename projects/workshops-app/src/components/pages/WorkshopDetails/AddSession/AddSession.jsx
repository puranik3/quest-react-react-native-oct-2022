import { useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

// "uncontrolled component" pattern to work with forms -> we create a "ref" (a reference to the input DOM node) for every input element
const AddSession = ({ id }) => {
    const sequenceIdRef = useRef();
    const nameRef = useRef();
    const speakerRef = useRef();
    const levelRef = useRef();
    const durationRef = useRef();
    const abstractRef = useRef();

    const addSession = ( event ) => {
        // avoid form submission (and page will refresh)
        event.preventDefault();

        const session = {
            sequenceId: sequenceIdRef.current.value,
            name: nameRef.current.value,
            speaker: speakerRef.current.value,
            level: levelRef.current.value,
            duration: durationRef.current.value,
            abstract: abstractRef.current.value
        };

        console.log( session );
    };

    return (
        <div>
            <h2>Add a session</h2>
            <hr />
            <Form onSubmit={addSession}>
                <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="sequenceId"
                >
                    <Form.Label column sm={2}>
                        Sequence ID
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            placeholder="Order of the session (1, 2, 3 etc.)"
                            ref={sequenceIdRef}
                        />
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
                        <Form.Control
                            type="text"
                            placeholder="Name of the session"
                            ref={nameRef}
                        />
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
                        <Form.Control
                            type="text"
                            placeholder="Names of the speakers for the session"
                            ref={speakerRef}
                        />
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
                        <Form.Control
                            type="text"
                            ref={durationRef}
                        />
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
                        <Form.Select
                            aria-label="Select a level"
                            ref={levelRef}
                        >
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
                        <Form.Control
                            as="textarea"
                            ref={abstractRef}
                        />
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
