import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { useStateValue } from './StateProvider';

const promise = loadStripe('pk_test_51Kn06pSDdSresvtN18S9fd19AG4DYcCzcaoMDdC2Nzmx82Bvwt5z9b1piz653xc84X8xAyAphlm3TLjk4PVV6ypo0088qGa43l')
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
              <Login />
          </Route>
          <Route path='/orders'>
              <Header/>
              <Orders />
          </Route>
          <Route path='/checkout'>
              <Header/>
              <Checkout/>
          </Route>
          <Route path='/payment'>
              <Header/>
              <Elements stripe={promise} >
                  <Payment />
              </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
