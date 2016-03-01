/**
 * Created by iano_ on 01/03/2016.
 */
import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            text: "This is the state text"
        }
        this.update = this.update.bind(this)
    }

    update(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return (
            <div>
                {this.state.text}
                <hr/>
                <Slider update={this.update} />
                <Slider update={this.update} />
            </div>
        );
    }
}

class Slider extends React.Component {
    render(){
        return (
            <input type="range"
                   min="0"
                   max="255"
                   onChange={this.props.update} />
        );
    }
}


module.exports = App