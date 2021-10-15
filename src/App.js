import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import HomePage from './components/Homepage/Home/HomePage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/home"><HomePage /></Route>
          <Route path="/login"><LoginPage /></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
