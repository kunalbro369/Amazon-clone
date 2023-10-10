import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{basket} , dispatch] = useStateValue();

  useEffect(()=> {
      
    const unsubscirbe = auth.onAuthStateChanged((authUser)=>{
      console.log( "user is ", authUser)
      if (authUser) {
         dispatch({
          type: "SET_USER",
          user: authUser
         })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
         })
      }
    });

    return ()=> {
      unsubscirbe();
    }
  }, [])

 
  return (
    <Router>
      <div className="app">
          <Routes>
          <Route exact path="/checkout" element={<>
            <Header/>
            <Checkout/>
          </>}/>

          <Route exact path="/login" element={<Login/>}/>
          
          <Route path="/" element={<><Header/>
            <Home/></>} />
          

          </Routes>
      
        </div>
    </Router>

  );
}

export default App;
