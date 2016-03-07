/**
 * Created by iano_ on 01/03/2016.
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import Wrapper from './components/Wrapper'
ReactDom.render(
    //<App text="Props text"/>,
    <Wrapper />,
    document.getElementById('app')
);