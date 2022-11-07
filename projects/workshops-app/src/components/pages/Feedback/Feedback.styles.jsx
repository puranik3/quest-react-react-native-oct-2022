import styled from 'styled-components';

export const FormGroup = styled.div`
    display: flex;
    margin: 1em 0;

    & label {
        flex-basis: 25%;
    }

    & input {
        flex-basis: 75%;
        padding: 0.5em;
        border-style: solid;
    }

    & button {
        padding: 0.5em;
        border: 0;
        border-radius: 4px;
        margin-left: 25%;
        color: white;
        background-color: navy;
        font-size: 1em;
    }

    & button:hover {
        box-shadow: 0px 0px 2px 2px gold;
    }
`;

export const Input = styled.input`
    border-color: ${
        props => props.valid ? 'green' : 'crimson'
    }
`;

FormGroup.displayName = 'FormGroup';