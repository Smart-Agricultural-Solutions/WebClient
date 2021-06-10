import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from "./Screens/Dashboard";

export var Routes = 
    <Router>

    <Route exact path = "/dash">

        <Dashboard></Dashboard>
    </Route>

</Router>