import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";

import {Navbar} from './components';
import { AddVideoForm, VideoGallery } from "./pages";

toast.configure();

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/video-add"]}>
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
