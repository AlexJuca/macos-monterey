import { Component } from 'react'
import './dock.scss'

class DockIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_executing: false,
            indicator: "",
        }
    }

    onClick = () => {
        this.setState({
                is_executing: true,
                indicator: "dot-indicator"
        })
        console.log(this.state.is_executing)
    }

    render() {
        const {icon} = this.props
        return (
            <li>
                <span className="icon">
                    <img onClick={this.onClick} onMouseDown={() => console.log(icon)} src={icon}></img>
                    <span className={this.state.indicator}></span>
                </span>
            </li>
        )
    }
}

class DockIconWrapper extends Component {
    render() {
        const {children} = this.props
        return (
            <ul>
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
            max_items: 11,
            visible: true
        }
    }
    render() {
        const applications = [
            [
                "finder", {
                    icon: "img/finder.png"
                }
            ],
            [
                "launchpad", {
                    icon: "img/launchpad.png"
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
            ],[
                "calender", {
                    icon: "img/calendar.png"
                }
            ],
            [
                "jetbrains-toolbox", {
                    icon: "img/jetbrains-toolbox.png"
                }
            ],[
                "calender", {
                    icon: "img/calendar.png"
                }
            ],
            [
                "jetbrains-toolbox", {
                    icon: "img/jetbrains-toolbox.png"
                }
            ]
        ]

        const icons = applications.map((row, index) => {
            if (index < this.state.max_items) {
                return <DockIcon key={index} icon={row[1].icon} />
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