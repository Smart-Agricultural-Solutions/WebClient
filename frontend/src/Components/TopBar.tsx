import React, { Component } from 'react'
import logo from "../Img/logo.jpg";
import placeholder from "../Img/placeholder.jpg";
export default class TopBar extends Component {
    render() {
        return (
            <div id= "topbar">
                <img src = {logo} id = "logo"></img>
                <h2 id = "heading-of-dash">Smart Argricultural Solutions</h2>
                <div id = "profile-section-topbar">
                    <img id = "profile-img" src = {placeholder}></img>
                    <h5 id = "profile-img-label">ronald555</h5>

                </div>
     
            </div>
        )
    }
}
