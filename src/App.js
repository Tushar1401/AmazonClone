import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { auth } from './firebase';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
