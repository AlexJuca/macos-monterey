import React, {Component} from 'react'
import './indicator.scss'

class Indicator extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span className={this.props.indicator}></span>
        )
    }
}


export default Indicator