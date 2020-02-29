import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './pages/start-page';
import UserPage from './pages/user-page';
import GlobalStyle from './global.styles';
// import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/user" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
