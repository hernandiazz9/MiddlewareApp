import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/Home/Home";
import LandingPage from './components/LandingPage/LandingPage';
<<<<<<< HEAD
import ProfileUser from "./components/ProfileUser/ProfileUser";


=======
import CreateUsers from "./components/CreateUsers/CreateUsers";
import CompanyDetail from "./components/CompanyDetails/CompanyDetails";
>>>>>>> main
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/login/:type" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
<<<<<<< HEAD
        <Route exact path="/profileuser" component={ProfileUser} />
=======
        <Route exact path="/createuser" component={CreateUsers} />
        <Route path="/companies/:id" component={CompanyDetail} />

>>>>>>> main
        {/* <RutaPrivada exact path="/proyectos" component={Proyectos} /> */}
      </Switch>
    </Router>
  );
}

export default App;
