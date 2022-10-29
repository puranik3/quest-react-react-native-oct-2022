import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { addSession as addSessionSvc } from '../../../../services/sessions';

// "controlled component" pattern to work with forms -> we create a "state" to hold the value for every input element. The state variable is going to "control" the input. When the input changes we set the state variable.
const AddSession = ({ id }) => {
    const [ sequenceId, setSequenceId ] = useState( '' );
    const [ name, setName ] = useState( '' );
    const [ speaker, setSpeaker ] = useState( '' );
    const [ level, setLevel ] = useState( '' );
    const [ duration, setDuration ] = useState( '' );
    const [ abstract, setAbstract ] = useState( '' );
    const [ isSubmitted, setIsSubmitted ] = useState( false );

    const [ sequenceIdErr, setSequencIdErr ] = useState( '' );
    const [ nameErr, setNameErr ] = useState( '' );
    const [ speakerErr, setSpeakerErr ] = useState( '' );
    const [ durationErr, setDurationErr ] = useState( '' );
    const [ levelErr, setLevelErr ] = useState( '' );
    const [ abstractErr, setAbstractErr ] = useState( '' );

    // should be a positive integer
    const validateSequenceId = () => {
        const pat = /^[0-9]+$/;
        const value = sequenceId;

        if( pat.test( value ) ) {
            setSequencIdErr( '' );
            return true;
        } else {
            setSequencIdErr( 'Sequence ID must be a positive integer like 1, 5, etc.' );
            return false;
        }
    };

    const validateName = () => {
        const value = name;
        
        if( value !== '' ) {
            setNameErr( '' );
            return true;
        } else {
            setNameErr( 'Name is required' );
            return false;
        }
    };
    
    const validateSpeaker = () => {
        const value = speaker;
        
        if( value !== '' ) {
            setSpeakerErr( '' );
            return true;
        } else {
            setSpeakerErr( 'Speaker name is required' );
            return false;
        }
    };
    
    const validateDuration = () => {
        const value = duration;
        
        if( value !== '' ) {
            setDurationErr( '' );
            return true;
        } else {
            setDurationErr( 'Duration is required' );
            return false;
        }
    };

    const validateLevel = () => {
        const value = level;
        
        if( value !== '' ) {
            setLevelErr( '' );
            return true;
        } else {
            setLevelErr( 'Select the level' );
            return false;
        }
    };
    
    const validateAbstract = () => {
        const value = abstract;
        
        if( value !== '' ) {
            setAbstractErr( '' );
            return true;
        } else {
            setAbstractErr( 'Abstract is required' );
            return false;
        }
    };

    const validate = () => {
        let isValid = true;

        isValid = validateSequenceId() && isValid;
        isValid = validateName() && isValid;
        isValid = validateSpeaker() && isValid;
        isValid = validateDuration() && isValid;
        isValid = validateLevel() && isValid;
        isValid = validateAbstract() && isValid;

        return isValid;
    }

    useEffect(
        () => {
            if( isSubmitted ) {
                validate();
            }
        },
        [ sequenceId, name, speaker, duration, level, abstract ]
    );

    const addSession = async ( event ) => {
        // avoid form submission (and page will refresh)
        event.preventDefault();
        
        if( !validate() ) {
            setIsSubmitted( true );
            return;
        }

        const session = {
            workshopId: +id,
            upvoteCount: 0,
            sequenceId: +sequenceId.trim(),
            name: name.trim(),
            speaker: speaker.trim(),
            level: level.trim(),
            duration: +duration.trim(),
            abstract: abstract.trim()
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
                            value={sequenceId}
                            onChange={( event ) => setSequenceId( event.target.value )}
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
                            value={name}
                            onChange={( event ) => setName( event.target.value )}
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
                            value={speaker}
                            onChange={( event ) => setSpeaker( event.target.value )}
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
                            value={duration}
                            onChange={( event ) => setDuration( event.target.value )}
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
                            value={level}
                            onChange={( event ) => setLevel( event.target.value )}
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
                            value={abstract}
                            isInvalid={!!abstractErr}
                            onChange={( event ) => setAbstract( event.target.value )}
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
