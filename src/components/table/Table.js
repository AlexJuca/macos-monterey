import React, { Component } from "react"

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Process Name</th>
        <th>PID</th>
        <th>User</th>
        <th>Execution Time</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.processes.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.pId}</td>
        <td>{row.user}</td>
        <td>{row.executionTime}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { processes } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody processes={processes} />
      </table>
    )
  }
}

export default Table
