import React, { Component } from "react"
import "./statusbar.scss"
import TimeHelper from "../../apps/weather/helpers/time"

class StatusBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="status-bar">
        <div className="">
          <ul className="status-bar-menu">
            <li tabIndex="1" className="status-bar-menu-option">
              <img
                className="status-bar-apple-icon"
                alt="apple-logo"
                src="../img/apple-status-bar-icon.png"
              />
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Finder
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              File
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Edit
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              View
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Go
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Window
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Help
            </li>
          </ul>
          <ul className="status-bar-menu-right">
            <li tabIndex="1" className="status-bar-menu-right-option">
              {TimeHelper.getCurrentUTCDate()} {TimeHelper.getCurrentTime()}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default StatusBar
