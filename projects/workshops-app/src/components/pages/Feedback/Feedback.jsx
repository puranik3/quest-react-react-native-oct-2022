// import './Feedback.css';
import { FormGroup, Input } from "./Feedback.styles";

const Feedback = () => {
    return (
        <div>
            <h1>Feedback</h1>
            <hr />
            <form>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <Input
                        type="text"
                        id="name"
                        valid={true}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="message">Message</label>
                    <Input
                        type="text"
                        id="message"
                        valid={false}
                    />
                </FormGroup>
                <FormGroup>
                    <button>Submit</button>
                </FormGroup>
            </form>
        </div>
    );
}
 
export default Feedback;