import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import VideoRegistration from './pages/registration/Video';
import CategoryRegistration from './pages/registration/Category';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Pag404() {
  return(
      <div>
        <h1>Pag Not Found! Error 404</h1>
      </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* this defines the exact pathway to load the 'App' component */}
      <Route path="/" component={Home} exact /> 
    
      <Route path="/registration/video" component={VideoRegistration}/>
      <Route path="/registration/category" component={CategoryRegistration}/>

      {/* This is an error component, loaded for any undefined path */}
      <Route component={Pag404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
