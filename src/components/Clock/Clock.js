import React, {Component} from 'react';
import './Clock.scss';


class Clock extends React.Component {

    state = {
        date: new Date(),
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Электронные часы.</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;
