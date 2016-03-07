/**
 * Created by iano_ on 05/03/2016.
 */
import React from 'react'
import ReactDom from 'react-dom'

class Nav extends React.Component {
    constructor(){
        super();
        this.state = {}
        this.divStyle = {
            //float: 'left',
            border: '1px solid',
            height: '100%',
            width: '250px',
            position: 'fixed', /* Stay in place */
            //zIndex: '1',
            top: '0',
            left: '0'
        }
    }

    render(){
        //var divStyle = {
        //    float: 'left',
        //    border: '1px solid'
        //};
        return(
            <div style={this.divStyle}>
                <ul>
                    <li>home</li>
                    <li>Calendar</li>
                </ul>
            </div>
        )
    }
}

export default Nav