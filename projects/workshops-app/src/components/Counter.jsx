import { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.initialValue
    };

    decrement = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    increment = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        const { value } = this.state;

        return (
            <>
                <button onClick={this.decrement}>-</button>
                {value}
                <button onClick={this.increment}>+</button>
            </>
        );
    }
};

export default Counter;