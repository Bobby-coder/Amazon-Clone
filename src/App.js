import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';



function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/checkout' element={<> <Header /> <Checkout /> </>} />
          <Route exact path='/' element={<> <Header /> <Home /> </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
