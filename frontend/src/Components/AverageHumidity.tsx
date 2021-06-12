import React, { Component } from 'react'
import humidity from "../Img/humidity.png";
export default class AverageHumidity extends Component {
    render() {
        return (
            <div id = "average-humidity"  className = "average-stats">
                <h1>Average Humidity</h1>
                <img src = {humidity}></img>
                <h2>12</h2>
            </div>
        )
    }
}
