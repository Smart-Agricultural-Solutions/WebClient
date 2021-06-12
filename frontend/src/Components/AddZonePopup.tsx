import React, { Component } from 'react'

export default class AddZonePopup extends Component<any,any> {
    render() {
        return (
            <div  id= "zone-popup"className = "popup-wrapper">
                <div id = "add-zone">
                    <h3>X</h3>
                    <h2>Add Zone</h2>
                    <input placeholder = "Zone Nickname"></input>
                    <button>Begin Listening</button> 
                </div>
                
            </div>
        )
    }
}
