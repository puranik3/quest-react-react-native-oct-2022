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
    const [ nameErr, setNameErr ] = useState( '' );
    const [ speakerErr, setSpeakerErr ] = useState( '' );
    const [ durationErr, setDurationErr ] = useState( '' );
    const [ levelErr, setLevelErr ] = useState( '' );
    const [ abstractErr, setAbstractErr ] = useState( '' );

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

    const validateName = () => {
        const value = nameRef.current.value.trim();
        
        if( value !== '' ) {
            setNameErr( '' );
            return true;
        } else {
            setNameErr( 'Name is required' );
            return false;
        }
    };
    
    const validateSpeaker = () => {
        const value = speakerRef.current.value.trim();
        
        if( value !== '' ) {
            setSpeakerErr( '' );
            return true;
        } else {
            setSpeakerErr( 'Speaker name is required' );
            return false;
        }
    };
    
    const validateDuration = () => {
        const value = durationRef.current.value.trim();
        
        if( value !== '' ) {
            setDurationErr( '' );
            return true;
        } else {
            setDurationErr( 'Duration is required' );
            return false;
        }
    };

    const validateLevel = () => {
        const value = levelRef.current.value.trim();
        
        if( value !== '' ) {
            setLevelErr( '' );
            return true;
        } else {
            setLevelErr( 'Select the level' );
            return false;
        }
    };
    
    const validateAbstract = () => {
        const value = abstractRef.current.value.trim();
        
        if( value !== '' ) {
            setAbstractErr( '' );
            return true;
        } else {
            setAbstractErr( 'Abstract is required' );
            return false;
        }
    };

    const addSession = async ( event ) => {
        // avoid form submission (and page will refresh)
        event.preventDefault();
        
        let isValid = true;

        isValid = validateSequenceId() && isValid;
        isValid = validateName() && isValid;
        isValid = validateSpeaker() && isValid;
        isValid = validateDuration() && isValid;
        isValid = validateLevel() && isValid;
        isValid = validateAbstract() && isValid;

        if( !isValid ) {
            return;
        }

        const session = {
            workshopId: +id,
            upvoteCount: 0,
            sequenceId: +sequenceIdRef.current.value.trim(),
            name: nameRef.current.value.trim(),
            speaker: speakerRef.current.value.trim(),
            level: levelRef.current.value.trim(),
            duration: +durationRef.current.value.trim(),
            abstract: abstractRef.current.value.trim()
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
                            isInvalid={!!nameErr}
                        />
                        <Form.Control.Feedback type="invalid">
                            {nameErr}
                        </Form.Control.Feedback>
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
                            isInvalid={!!speakerErr}
                        />
                        <Form.Control.Feedback type="invalid">
                            {speakerErr}
                        </Form.Control.Feedback>
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
                            isInvalid={!!durationErr}
                        />
                        <Form.Control.Feedback type="invalid">
                            {durationErr}
                        </Form.Control.Feedback>
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
                            isInvalid={!!levelErr}
                        >
                            <option value="">Open this select menu</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {levelErr}
                        </Form.Control.Feedback>
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
                            isInvalid={!!abstractErr}
                        />
                        <Form.Control.Feedback type="invalid">
                            {abstractErr}
                        </Form.Control.Feedback>
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
