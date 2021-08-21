import React from "react"
import Button from "../../components/buttons/Button"
import Window from "../../components/window/Window"

class HelloWorld extends Window {
  constructor(props) {
    super(props)
    this.state = {
      processes: props.processes,
      should_render: true,
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
        <p>
          Hello World - This is an application running on a clone of macOS Monterey
          on the web. It was built using HTML, CSS, Javascript and React JS. The plan
          is to make this behave as close to the real macOS but build it with web
          technologies. ✌️
        </p>

        <p>
          This was created with ❤️ by{" "}
          <a target="_blank" rel="noreferrer" href="https://twitter.com/0xFFA4">
            Alexandre Juca
          </a>
        </p>

        <Button onClick={this.onClick} text={"Click me!!"} />
      </div>
    )
  }
}

export default HelloWorld
