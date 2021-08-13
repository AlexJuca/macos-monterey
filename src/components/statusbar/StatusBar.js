import React, {Component} from 'react'
import './statusbar.scss'

class StatusBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="status-bar">
                <div>
                    <ul className="status-bar-menu">
                        <li className="staus-bar-menu-option"><img className="status-bar-apple-icon" alt="apple-logo" src="../img/apple-status-bar-icon.png" /></li>
                        <li className="staus-bar-menu-option">Finder</li>
                        <li className="staus-bar-menu-option">File</li>
                        <li className="staus-bar-menu-option">Edit</li>
                        <li className="staus-bar-menu-option">View</li>
                        <li className="staus-bar-menu-option">Go</li>
                        <li className="staus-bar-menu-option">Window</li>
                        <li className="staus-bar-menu-option">Help</li>
                    </ul>
                </div>
            </div>
        ) 
    }
}

export default StatusBar