import React, { Component } from 'react';

class Picture extends Component {
    render() {
        return (
            <div id="div" >
                <img src={this.props.url} alt="sample pic" id="pic" />
                <p>Mindblow</p>
            </div>
        )
    }
}

export default Picture;