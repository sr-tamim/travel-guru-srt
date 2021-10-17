import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import HomePage from './components/Homepage/Home/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import changeHeaderBack from './utilities/changeHeaderBack';
import UserContextProvider from './components/UserContextProvider/UserContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';
import BookingPage from './components/BookingPage/BookingPage';


function App() {
  window.addEventListener('scroll', changeHeaderBack);

  return (
    <div className="App" onScroll={changeHeaderBack}>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/home"><HomePage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/signup"><SignUpPage /></Route>
            <PrivateRoute path="/profile"><UserProfile /></PrivateRoute>
            <PrivateRoute path="/booking/:id"><BookingPage /></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
