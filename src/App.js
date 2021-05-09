import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/auth">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
