import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
    render() {
        const { messages } = this.props;
        return messages.map(message_naja => (
            <ul>
                <Message message={message_naja}/>

            </ul>
        ));
    }
}

export default MessageList;