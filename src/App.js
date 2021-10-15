import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import HomePage from './components/Homepage/Home/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import changeHeaderBack from './utilities/changeHeaderBack';

function App() {
  window.addEventListener('scroll', changeHeaderBack);
  return (
    <div className="App" onScroll={changeHeaderBack}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/home"><HomePage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/signup"><SignUpPage /></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
