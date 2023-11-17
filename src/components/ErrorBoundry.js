import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
        console.log("1");
    }


componentDidCatch(error,info) {
    console.log("2");
    this.setState({ hasError:true })
    
}

render(){
    //console.log("3");
    if(this.state.hasError) {
        return <h1>Oops, That's not good</h1>
    }
    return this.props.children
}
}

export default ErrorBoundry;