import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoRegistration from './pages/registration/Video';
import CategoryRegistration from './pages/registration/Category';

function Pag404() {
  return (
    <div>
      <h1>Pag Not Found! Error 404</h1>
      <h2>Why don't you try to learn how to build a flappy bird game while we solve the problem.</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jOAU81jdi-c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* this defines the exact pathway to load the 'App' component */}
      <Route path="/" component={Home} exact />

      <Route path="/registration/video" component={VideoRegistration} />
      <Route path="/registration/category" component={CategoryRegistration} />

      {/* This is an error component, loaded for any undefined path */}
      <Route component={Pag404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
