import React, { Component } from 'react'
import SideSnapShot from '../Components/SideSnapShot';
import Zones from '../Components/Zones';
import "../Css/dash.css";

export default class Dashboard extends Component {
    render() {
        return (
            <div id=  "dash-wrapper">
                <Zones></Zones>
                <SideSnapShot/>
            </div>
        )
    }
}
