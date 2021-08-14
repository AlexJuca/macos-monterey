import React, {Component} from 'react'
import Button from '../../components/buttons/Button'
import Window from '../../components/window/Window'

class HelloWorld extends Window {
    constructor(props) {
        super(props)
        this.state = {
            processes: props.processes,
            should_render: true
        }
    }

    componentDidMount() {
        this.useDarkTheme(false)
        this.setWindowFixedSize(true)
    }

    onClick = () => {
        alert("Button seems to be working!")
    }

    render() {
        return this.build(
            <div>
                <p>This is a stupid simple application that plays a specific video, Enjoy the song!</p>
            
                <Button onClick={this.onClick} text={"Click me!!"} />
            </div>
        )
    }
}


export default HelloWorld