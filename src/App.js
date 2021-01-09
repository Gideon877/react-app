import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainLayout from './component/MainLayout';


const App = () => {
  return <Router>
    <Switch>
      <Route path='/' render={() => <MainLayout />}/>
    </Switch>

  </Router>
}

export default App;
