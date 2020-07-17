import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }

    this.handleLogin = this.handleLogin.bind(this);
    }

handleUsername(user) {
    this.setState({username: user});
}

handlePassword(pass) {
    this.setState({password: pass});
}

handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
}


    render() { 
        return ( 
            <div>
                <input
                onChange={e => this.handleUsername(e.target.value)}
                type="text"
                />
                <input
                onChange={e => this.handlePassword(e.target.value)}
                type="text" 
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
         );
    }
}
 
export default Login;