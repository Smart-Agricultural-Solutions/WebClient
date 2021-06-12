import React, { Component } from 'react'
import nutrients from "../Img/nutrients.png";
export default class NutrientTemp extends Component {
    render() {
        return (
            <div  id= "average-nutrient"className = "average-stats">
                <h1>Average Nutrient Temp</h1>
                <img src = {nutrients}></img>
                <h2>10</h2>
            </div>
        )
    }
}
