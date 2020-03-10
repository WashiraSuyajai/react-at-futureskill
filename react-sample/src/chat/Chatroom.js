import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Chatroom extends Component {
    state = {
        socket : null,
        count : 0 //เพิ่ม count และ initial ค่า 0
    };

    componentDidMount() {
        const socket = socketIOClient('localhost:8080');

        this.setState({ socket: socket });
        
        socket.on("count", data => this.handleCount(data))

        //socket.emit("emit", { data: "test" }); 
        //จะส่ง "emit" ไปหา server จากนั้น server จะทำการรันกับ { data: "test" }
    }

    handleCount = data => {
        this.setState({ count : data.count })
    }

    onclick = () => {
        let { socket, count } = this.state; //spread operator
        count = count +1;
        this.setState({ count : count });
        socket.emit("emit", { count : count });
    }
    render() {
        return <div>
            <div>{this.state.count}</div>
            <button onClick={this.onclick}>Count</button>
        </div>
    } //เพิมปุ่ม "Count" เมื่อกด จะรัน function "onClick"
}

export default Chatroom;