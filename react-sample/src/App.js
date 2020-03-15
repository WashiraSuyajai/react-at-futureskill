import React, {Component} from 'react';
import './App.css';
import User from './user/User';
import Post from './post/Post';
import { Route, Link } from 'react-router-dom';
import Request from './lib/Request';
import Count from './chat/Count';
import Chatroom from './chat/Chatroom';
import Chatform from './chat/Chatform';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

class App extends Component {

  state = {
    name: 'FutureSkill'
  }

  onNameChange = name => {
    this.setState({ name : name });
  }

  render() {

    const {name} = this.state
    return (
      <div> 

        <Navbar color="light" light expand="md">
          
          
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/posts">Posts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/count">Count</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/chat">Chat</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          
        </Navbar>

        {/* Link แบบเดิม 
        <div>
          Hello {name}
        </div>
        <div>
        <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/count">Count</Link>
          <Link to="/chat">Chat</Link>
        </div>
        */}  
        <Route 
          path="/users" 
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {data => <User data={data}/>}
            </Request>
          )}
        />
        <Route 
          path="/posts" 
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/posts">
              {data => <Post data={data}/>}
            </Request>
          )}
        />
        <Route path="/count" component={Count} />
        <Route path="/chat" component={Chatform} />
        <Route path="/chatroom" component={Chatroom} />
      </div>
    );
  }
  
}

export default App;
