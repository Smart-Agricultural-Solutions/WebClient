import {BrowserRouter as Router,Route} from "react-router-dom";
import TopBar from "./Components/TopBar";
import Dashboard from "./Screens/Dashboard";
import "./Css/topbar.css";

export var Routes = 
    <Router>

    <Route exact path = "/dash">
        <TopBar/>
        <Dashboard></Dashboard>
    </Route>

</Router>