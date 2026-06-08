import React, { Component } from "react";

//class component
class Welcome extends React.Component {
    render(){
        return <h1>Welcome {this.props.name}</h1>;
    }
}

export default Welcome;