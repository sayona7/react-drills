import React, { Component } from 'react'

class User extends Component {
    constructor() {
        super();
        
        this.state = {
            user: "",
            pass: ""
        };
  
        this.loginFunction = this.loginFunction.bind(this);
  
    }

    loginFunction() {
        alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
    }
  
    usernameChange(username) {
        this.setState({user: username});
    }

    passwordChange(password) {
        this.setState({pass: password});
    }

    render() {
        return (
            <div className="user">
                <input 
                onChange={e => this.usernameChange(e.target.value)}
                placeholder="username"
                name="user"
                value={this.state.user} />
                <input 
                onChange={e => this.passwordChange(e.target.value)}
                placeholder="password"
                name="password"
                value={this.state.pass}/>
                <button onClick={this.loginFunction}>
                Login</button>
            </div>
        )
    }
}

export default User;