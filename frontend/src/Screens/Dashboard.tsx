import React, { Component } from 'react'
import AverageHumidity from '../Components/AverageHumidity';
import AverageTemp from '../Components/AverageTemp';
import AddZonePopup from '../Components/AddZonePopup';
import GreenHouseLayout from '../Components/GreenHouseLayout';
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
                <GreenHouseLayout/>
                <AddZonePopup/>
            </div>
        )
    }
}
