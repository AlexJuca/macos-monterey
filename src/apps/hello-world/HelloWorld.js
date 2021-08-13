import React, {Component} from 'react'
import Table from '../../components/table/Table'
import Window from '../../components/window/Window'

class HelloWorld extends Window {
    constructor(props) {
        super(props)
        this.state = {
            processes: props.processes,
        }
    }

    componentDidMount() {
        this.useDarkTheme(false)
        this.setWindowFixedSize(true)
    }

    render() {
        return this.build(
            <p>Hello, World</p>
        )
    }
}


export default HelloWorld