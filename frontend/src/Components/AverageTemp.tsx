import React, { Component } from 'react'
import temp from "../Img/temp.png";
export default class AverageTemp extends Component {
    render() {
        return (
            <div  id = "average-temp" className = "average-stats">
                <h1>Average Tempature</h1>
                <img src ={temp} ></img>
                <h2>6</h2>
                
            </div>
        )
    }
}
