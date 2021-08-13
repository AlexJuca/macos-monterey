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
        }
    }
    render() {
        const applications = [
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
        ]

        const icons = applications.map((row, index) => {
            if (index < this.state.max_items) {
                return <DockIcon is_launcher={row[1].is_launcher} name={row[0]} key={index} icon={row[1].icon} />
            }
        })

        return (<div className="dock">
            <DockIconWrapper>
                {icons}
            </DockIconWrapper>
        </div>)
    }
}


export default Dock