/**
 * Created by iano_ on 05/03/2016.
 */
import React from 'react'
import ReactDom from 'react-dom'

class CalendarDay extends React.Component {
    constructor(){
        super();
        this.state = {};
        this.divStyle = {
            float: 'left',
            border: '1px solid',
            height: '18%', //this.props.fullHeight,
            width: '13%',
            margin: '1px'
        }
    }

    render(){
        return(
            <div style={this.divStyle}>
                <strong>Box {this.props.id + 1 } </strong>
            </div>
        )
    }
}

export default CalendarDay