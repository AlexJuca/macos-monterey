import React, { Component } from "react"
import "./App.scss"
import Dock from "./components/dock/Dock"
import StatusBar from "./components/statusbar/StatusBar"
import TrexGame from "./apps/t-rex/TrexGame"
import Process from "./lib/darwin/Process"
import WeatherApp from "./apps/weather/Weather"
import "./fonts/fonts.js"
import "remixicon/fonts/remixicon.css"
import ProcessManager from "./apps/manager/ProcessManager"
import HelloWorld from "./apps/hello-world/HelloWorld"
import SponsorApp from "./apps/sponsor/Sponsor"

class App extends Component {
  main = new Process()
  dock = new Process()
  view = null

  constructor(props) {
    super(props)
    this.state = {
      processes: [
        {
          name: "dock",
          pId: "1",
          user: "System",
          executionTime: 90,
        },
        {
          name: "T-Rex",
          pId: "2",
          user: "AlexJuca",
          executionTime: 90,
        },
        {
          name: "Hello World",
          pId: "3",
          user: "AlexJuca",
          executionTime: 90,
        },
        {
          name: "Process Manager",
          pId: "4",
          user: "AlexJuca",
          executionTime: 90,
        },
      ],
    }
  }

  componentDidMount() {
    window.addEventListener("load", this.onLoad)
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.onLoad)
  }

  onLoad(processes) {
    return (
      <div>
        <StatusBar />
        <TrexGame />
        <SponsorApp />
        <ProcessManager processes={processes} />
        <HelloWorld />
        <WeatherApp />
        <Dock />
      </div>
    )
  }

  render() {
    return <div>{this.onLoad(this.state.processes)}</div>
  }
}

export default App
