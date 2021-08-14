import React, {Component} from 'react'
import Button from '../../components/buttons/Button'
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

    onClick = () => {
        alert("Button seems to be working!")
    }

    render() {
        return this.build(
            <div>
                <p>This is a stupid simple application that plays a specific video, Enjoy the song!</p>
                <div>
                <iframe width="512" height="320" src="https://www.youtube.com/embed/5i6A1IHAQsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Button onClick={this.onClick} text={"Click me!!"} />
            </div>
        )
    }
}


export default HelloWorld