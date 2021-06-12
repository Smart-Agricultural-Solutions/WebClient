import React, { Component } from 'react'
import empty from '../Img/look.svg';
//#5AAB61)
export default class Zones extends Component {
    render() {
        return (
            <div id = "zones-container">
                <h3 id = "zones-headers">Zones</h3>
                <button>Add Zone</button>
                <button>Edit Zones</button>
                <img  src = {empty}></img>
                <h2 id  = "zones-placeholder-text">Oh no!! You need to add Zones!</h2>
                
            </div>
        )
    }
}
