import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import HomePage from './components/Homepage/Home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/home"><HomePage /></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
