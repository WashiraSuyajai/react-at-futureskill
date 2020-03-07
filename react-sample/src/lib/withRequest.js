import React, { Component } from "react";
import axios from 'axios'

//higher order component
export default url => WrappedComponent  => 
    class extends Component {

        state = {
            data : []
        };
        
        async componentDidMount() {
            const result = await axios.get(url);
            this.setState({ data : result.data });
        };

        render() {
            return <WrappedComponent {...this.state} {...this.props}/>;
            //{...this.state} is look like {data: this.state.data} of other component
        }
    }