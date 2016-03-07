/**
 * Created by iano_ on 01/03/2016.
 */
import React from 'react';
import ReactDom from 'react-dom'
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            text: "This is the state text",
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this)
    }

    update(e){
        this.setState({
            text: e.target.value,
            red: ReactDom.findDOMNode(this.refs.red).value,
            green: ReactDom.findDOMNode(this.refs.green).value,
            blue: ReactDom.findDOMNode(this.refs.blue).value
        })
    }

    render(){
        setTimeout(() => {
            this.setState({text: "New text"})
        }, 2000);
        return (
            <div>
                <span style={{color: 'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')'}}>
                    {this.state.text}
                </span>
                <hr/>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update} />
                {this.state.blue}
                <br/>
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
                   defaultValue="0"
                   onChange={this.props.update} />
        );
    }
}


module.exports = App