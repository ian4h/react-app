/**
 * Created by iano_ on 05/03/2016.
 */
import React from 'react'
import ReactDom from 'react-dom'

import Nav from './Nav'
import CalendarDay from './CalendarDay'

class Wrapper extends React.Component {
    constructor(){
        super();
        var _this = this;
        this.state = {
            width: 0,
            height: 0
        };
        this.divStyle = {
            marginLeft: '250px',
            height: '100%',
            //width: '100%'
        };

        console.log(window.innerWidth)
    }

    componentWillMount(){
        //const page = document.getElementById("wrapper")
        //console.log("Will Mount Width : ", page.offsetWidth)
        console.log("ComponentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
        const page = document.getElementById("wrapper")
        console.log("DIV Width : ", page.offsetWidth)
        this.state.width = page.offsetWidth
        this.state.height = page.offsetHeight
        console.log(this.state.width)
        console.log(this.state.height)
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
        const page = document.getElementById("wrapper")
        console.log("DIV Width : ", page.offsetWidth)
        console.log(this.state.width)
        console.log(this.state.height)
    }

    showWidth(e){
        console.log("DivClick")
        var target = e.target || e.srcElement
        console.log(target)
        console.log("Inner Width : ", target.innerWidth)
        console.log("OffsetWidth : ", target.offsetWidth)
        //console.log(this.state.width)
        //console.log(this.state.height)
    }
    render(){
        var calendar = []
        for(var i=0; i<35; i++){
            calendar.push(<CalendarDay id={i} />)
        }
        return(
            <div id="wrapper" onClick={this.showWidth} ref="div" style={this.divStyle}>
                <Nav />
                {calendar}
            </div>
        )
    }
}

export default Wrapper