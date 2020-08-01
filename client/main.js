import React from 'react' ; 
import ReactDOM from 'react-dom';
import App from './components/app';
import './main.html';

Meteor.startup(()=>{
   console.log("working");
   ReactDOM.render(<App /> , document.getElementById("main"))
});

