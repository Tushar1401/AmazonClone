import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
import { useStateValue } from './Components/StateProvider';
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  'pk_test_51JLnWdSBBefUMe6127wcd6z2qbht90Nn7BzUhMxxfDZncLtNClFrhqHRNyJyPGp0CZViN1H7Yh3XyA4drd1Re2kQ00nu7Yv4sT'
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS >>> ', authUser);

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
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}> 
              <Payment />
            </Elements>
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
