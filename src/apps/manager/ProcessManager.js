import React, { Component } from "react"
import Table from "../../components/table/Table"
import Window from "../../components/window/Window"

class ProcessManager extends Window {
  constructor(props) {
    super(props)
    this.state = {
      processes: props.processes,
      should_render: true,
    }
  }

  componentDidMount() {
    this.setWindowFixedSize(true)
  }

  render() {
    return this.build(<Table processes={this.state.processes} />)
  }
}

export default ProcessManager
