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
            <li tabIndex="1" id="apple" className="status-bar-menu-option">
              <img
                className="status-bar-apple-icon"
                alt="apple-logo"
                src="../img/apple-status-bar-icon.png"
              />
              <ul>
                <li>About This Mac</li>
                <li>System Preferences...</li>
                <li>App Store...</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Finder
              <ul>
                <li>About Finder</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              File
              <ul>
                <li>New Finder Window</li>
                <li>New Folder</li>
                <li>New Smart Folder</li>
                <li>New Tab</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Edit
              <ul>
                <li>Undo</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              View
              <ul>
                <li>Enter Fullscreen</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Go
              <ul>
                <li>back</li>
                <li>Forward</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Window
              <ul>
                <li>Minimize</li>
                <li>Zoom</li>
              </ul>
            </li>
            <li tabIndex="1" className="status-bar-menu-option">
              Help
              <ul>
                <li>macOS Help</li>
                <li>See Whats New in macOS</li>
              </ul>
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
