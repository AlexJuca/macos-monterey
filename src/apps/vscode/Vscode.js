import React from "react"
import Window from "../../components/window/Window"
import "./vscode.scss"

class Vscode extends Window {
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
    this.setCustomStyle("vscode-theme")
  }

  render() {
    return this.build(
      <div>
        <iframe
          style={{ border: "none" }}
          height="1000px"
          width="1000px"
          allowFullScreen="false"
          src={"https://vscode.dev"}
        ></iframe>
      </div>
    )
  }
}

export default Vscode
