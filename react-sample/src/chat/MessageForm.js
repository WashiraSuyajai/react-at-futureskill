import React, { Component } from 'react';

class MessageForm extends Component {
    
    state = {
        text: ''
    }
    onSubmit = e => {
        e.preventDefault();
        //send message โดยไม่ reload (กระพริบ) ระหว่างการส่ง
        this.props.onMessageSend({
            text: this.state.text, 
            member: this.props.currentMember});
    }
    onChange = e => {
        this.setState({text: e.target.value});
    }; //เก็บข้อความไว้ใน 'text'
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <button>Send</button>
            </form>
        ) //สร้างกล่องข้อความและปุ่ม "Send"
    }
}

export default MessageForm;