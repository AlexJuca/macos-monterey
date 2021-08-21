import React from "react"
import PropTypes from "prop-types"
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

ProcessManager.propTypes = {
  processes: PropTypes.array,
  should_render: PropTypes.bool,
}

export default ProcessManager
