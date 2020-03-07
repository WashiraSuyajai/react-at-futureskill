import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Chatroom extends Component {
    state = {
        socket : null
    };

    componentDidMount() {
        const socket = socketIOClient('localhost:8080');

        this.setState({ socket: socket });

        socket.emit("emit", { data: "test" });
    }

    render() {
        return <div>Chatroom</div>
    }
}

export default Chatroom;