import React, { Component } from 'react'
import AverageHumidity from '../Components/AverageHumidity';
import AverageTemp from '../Components/AverageTemp';
import NutrientTemp from '../Components/NutrientTemp';
import SideSnapShot from '../Components/SideSnapShot';
import Zones from '../Components/Zones';
import "../Css/dash.css";

export default class Dashboard extends Component {
    render() {
        return (
            <div id=  "dash-wrapper">
                <Zones></Zones>
                <SideSnapShot/>
                <AverageHumidity/>
                <AverageTemp/>
                <NutrientTemp/>
            </div>
        )
    }
}
