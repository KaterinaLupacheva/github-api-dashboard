import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StartPage from './pages/start-page';
import UserPage from './pages/user-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StartPage} />
        <Route exact path='/user' component={UserPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
