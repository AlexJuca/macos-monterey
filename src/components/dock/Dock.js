import { Component } from 'react'
import './dock.scss'
import DockIcon from '../dock-icon/DockIcon'

class DockIconWrapper extends Component {
    render() {
        const {children} = this.props
        return (
            <ul className="icon-wrapper">
                {children}
            </ul>
        )
    }
}

class Dock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "512px",
            height: "72px",
            max_items: 13,
            visible: true,
            undocked_applications_in_execution: [
                [
                    "trex", {
                        icon: "/img/trex.png"
                    }
                ]
            ],
            docked_applications: [
                [
                    "finder", {
                        icon: "img/finder.png",
                    }
                ],
                [
                    "launchpad", {
                        icon: "img/launchpad.png",
                        is_launcher: true,
                    }
                ],
                [
                    "slack", {
                        icon: "img/slack.png"
                    }
                ],
                [
                    "chrome", {
                        icon: "img/chrome.png"
                    }
                ],
                [
                    "imessage", {
                        icon: "img/imessage.png"
                    }
                ],
                [
                    "notion", {
                        icon: "img/notion.png"
                    }
                ],
                [
                    "safari", {
                        icon: "img/safari.png"
                    },
                ],
                [
                    "terminal", {
                        icon: "img/terminal.png"
                    }
                ],
                [
                    "calender", {
                        icon: "img/calendar.png"
                    }
                ],
                [
                    "jetbrains-toolbox", {
                        icon: "img/jetbrains-toolbox.png"
                    }
                ],
                [
                    "Maps", {
                        icon: "img/maps.png"
                    }
                ],
                [
                    "sketch", {
                        icon: "img/sketch.png"
                    }
                ]
            ],

        }
    }

    render() {

        const currently_docked_apps = this.state.docked_applications.map((row, index) => {
            if (index < this.state.max_items) {
                return <DockIcon is_launcher={row[1].is_launcher} name={row[0]} key={index} icon={row[1].icon} />
            }
        })

        const currently_running_apps = this.state.undocked_applications_in_execution.map((row, index) => {
            if (index < this.state.max_items && this.state.undocked_applications_in_execution.length != 0 ) {
                return <DockIcon is_launcher={row[1].is_launcher} name={row[0]} key={index} icon={row[1].icon} />
            }
        })

        const conditionally_add_dock_seperator = () => {
            if (this.state.undocked_applications_in_execution.length == 0) {
                return null
            } else {
                return <div className="dock-seperator"></div>
            }
        }

        return (<div className="dock">
            <DockIconWrapper>
                {currently_docked_apps}
                {conditionally_add_dock_seperator()}
                {currently_running_apps}
            </DockIconWrapper>
        </div>)
    }
}

export default Dock