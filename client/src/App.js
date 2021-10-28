import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/index";
import Home from "./components/Home/Home";
import LandingPage from './components/LandingPage/LandingPage';
import ProfileUser from "./components/ProfileUser/ProfileUser";


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/login/:type" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profileuser" component={ProfileUser} />
        {/* <RutaPrivada exact path="/proyectos" component={Proyectos} /> */}
      </Switch>
    </Router>
  );
}

export default App;
