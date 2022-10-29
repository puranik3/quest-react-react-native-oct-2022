import { Form, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { addSession as addSessionSvc } from '../../../../services/sessions';

// "controlled component" pattern to work with forms -> we create a "state" to hold the value for every input element. The state variable is going to "control" the input. When the input changes we set the state variable.
const AddSession = ({ id }) => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState : { errors }, getValues }= useForm({
        mode: 'all' // do validations on all events - submit, change etc.
    });

    // since we wrapped in a call to handleSubmit, this function is called on submit only if the form is valid
    // the form submission is also prevented automatically
    const addSession = async ( values ) => {

        const session = {
            workshopId: +id,
            upvoteCount: 0,
            ...values, // has all 6 form field values
            sequenceId: +values.sequenceId,
            duration: +values.duration
        };

        try {
            const updatedSession = await addSessionSvc( session );
            toast.success( `Added session ${updatedSession.name} with id = ${updatedSession.id}` );
            navigate( '/workshops/' + id );
        } catch( error ) {
            toast.error( error.message );
        }
    };

    return (
        <div>
            <h2>Add a session</h2>
            <hr />
            <Form onSubmit={handleSubmit(addSession)} noValidate>
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
                            {...register( 'sequenceId', { required: true, pattern : /^\d+$/, valueAsNumber: true } )}
                            isInvalid={!!errors.sequenceId}
                        />
                        {
                            errors.sequenceId && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.sequenceId.type === 'required' && 'Sequence ID is required'}
                                    {errors.sequenceId.type === 'pattern' && 'Sequence ID must be a positive integer'}
                                </Form.Control.Feedback>
                            )
                        }
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
                            {...register( 'name', { required: true, pattern : /^[A-Za-z0-9 ]+$/ } )}
                            isInvalid={!!errors.name}
                        />
                        {
                            errors.name && (
                                <Form.Control.Feedback type="invalid">
                                    {
                                        errors.name.type === 'required' && 'Name is required'
                                    }
                                    {
                                        errors.name.type === 'pattern' && 'Name must consist of A-Z, a - z, spaces and 0 - 9'
                                    }
                                </Form.Control.Feedback>
                            )
                        }
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
                            {...register( 'speaker', { required: true, pattern : /^[A-Za-z0-9 ]+(,[A-Za-z0-9 ]+)*$/ } )}
                            isInvalid={!!errors.speaker}
                        />
                        {
                            errors.speaker && (
                                <Form.Control.Feedback type="invalid">
                                    Speaker names must be comma-separated
                                </Form.Control.Feedback>
                            )
                        }
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
                            {...register( 'duration', { required: true, pattern : /^\d+(.\d+)?$/ } )}
                            isInvalid={!!errors.duration}
                        />
                        {
                            errors.duration && (
                                <Form.Control.Feedback type="invalid">
                                    Duration must be a positive decimal number
                                </Form.Control.Feedback>
                            )
                        }
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
                            {...register( 'level', { required: true } ) }
                            isInvalid={!!errors.level}
                        >
                            <option value="">Open this select menu</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </Form.Select>
                        {
                            errors.level && (
                                <Form.Control.Feedback type="invalid">
                                    Please select level 
                                </Form.Control.Feedback>
                            )
                        }
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
                            {...register( 'abstract', { minLength: 20 } ) }
                            isInvalid={!!errors.abstract}
                        />
                        {
                            errors.abstract && (
                                <Form.Control.Feedback type="invalid">
                                    Type at least 20 characters
                                </Form.Control.Feedback>
                            )
                        }
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
