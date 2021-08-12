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
                        <li>Finder</li>
                        <li>File</li>
                        <li>Edit</li>
                    </ul>
                </div>
            </div>
        ) 
    }
}

export default StatusBar