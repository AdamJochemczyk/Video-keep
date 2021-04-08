import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import {Navbar} from './components';
import { AddVideoForm, VideoGallery } from "./pages";

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/video-add">
          <AddVideoForm />
        </Route>
        <Route path="/video-gallery">
          <VideoGallery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
