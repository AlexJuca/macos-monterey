import React, {Component} from 'react'
import Tooltip from '@atlaskit/tooltip'
import Indicator from '../indicator/Indicator'
import './dock-icon.scss'

class DockIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_executing: false,
            indicator: "dot-indicator-disabled",
            is_launcher: props.is_launcher != null || undefined ? true : false,
            name: this.capitilizeFirstLetter(props.name)
        }
    }

    capitilizeFirstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    onClick = () => {
        if (!this.state.is_launcher) {
            this.setState({
                is_executing: true,
                indicator: "dot-indicator"
            })
        }
        console.log(this.state.is_executing)
    }

    onMouseDown = () => {
        console.log("Has been clicked!")
    }

    render() {
        const {icon, name} = this.props
        return (
            <Tooltip content={this.state.name}>
                <li>
                <span className="icon">
                    <img className="icon-img" onClick={this.onClick} onMouseDown={this.onMouseDown} src={icon}></img>
                    <Indicator indicator={this.state.indicator} ></Indicator>
                </span>
            </li>
            </Tooltip>
        )
    }
}

export default DockIcon