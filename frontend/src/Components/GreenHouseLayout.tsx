import React, { Component } from 'react'
import placeholder from '../Img/placeholdermap.jpg';
import "../Css/layout.css";

export default class GreenHouseLayout extends Component {
    render() {
        return (
            <div id = "layout-wrapper">
                <h2>Chicago Station</h2>
                <h3>Greenhouse</h3>
                <img src  = {placeholder}></img>
                <button>Edit</button>
            </div>
        )
    }
}
