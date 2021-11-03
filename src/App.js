import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import HomePage from './components/Homepage/Home/HomePage';
import changeHeaderBack from './utilities/changeHeaderBack';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';
import PlacesContextProvider from './contexts/PlacesContext';
import BookingPage from './components/BookingPage/BookingPage';
import UserContextProvider from './contexts/UserContextProvider/UserContextProvider';
import LoginPage from './components/AuthPages/LoginPage/LoginPage';
import SignUpPage from './components/AuthPages/SignUpPage/SignUpPage';


function App() {
  window.addEventListener('scroll', changeHeaderBack);

  return (
    <div className="App" onScroll={changeHeaderBack}>
      <UserContextProvider><PlacesContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/home"><HomePage /></Route>
            <PrivateRoute path="/booking/:id"><BookingPage /></PrivateRoute>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/signup"><SignUpPage /></Route>
            <PrivateRoute path="/profile"><UserProfile /></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </PlacesContextProvider></UserContextProvider>
    </div >
  );
}

export default App;
