import { useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { addSession as addSessionSvc } from '../../../../services/sessions';

// "uncontrolled component" pattern to work with forms -> we create a "ref" (a reference to the input DOM node) for every input element
const AddSession = ({ id }) => {
    const sequenceIdRef = useRef();
    const nameRef = useRef();
    const speakerRef = useRef();
    const levelRef = useRef();
    const durationRef = useRef();
    const abstractRef = useRef();

    const [ sequenceIdErr, setSequencIdErr ] = useState( '' );

    // should be a positive integer
    const validateSequenceId = () => {
        const pat = /^[0-9]+$/;
        const value = sequenceIdRef.current.value;

        if( pat.test( value ) ) {
            setSequencIdErr( '' );
            return true;
        } else {
            setSequencIdErr( 'Sequence ID must be a positive integer like 1, 5, etc.' );
            return false;
        }
    };

    const addSession = async ( event ) => {
        // avoid form submission (and page will refresh)
        event.preventDefault();

        if( !validateSequenceId() ) {
            return;
        }

        const session = {
            workshopId: +id,
            upvoteCount: 0,
            sequenceId: +sequenceIdRef.current.value,
            name: nameRef.current.value,
            speaker: speakerRef.current.value,
            level: levelRef.current.value,
            duration: +durationRef.current.value,
            abstract: abstractRef.current.value
        };

        try {
            const updatedSession = await addSessionSvc( session );
            toast.success( `Added session ${updatedSession.name} with id = ${updatedSession.id}` );
        } catch( error ) {
            toast.error( error.message );
        }
    };

    return (
        <div>
            <h2>Add a session</h2>
            <hr />
            <Form onSubmit={addSession} noValidate>
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
                            isInvalid={!!sequenceIdErr}
                        />
                        <Form.Control.Feedback type="invalid">
                            {sequenceIdErr}
                        </Form.Control.Feedback>
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
