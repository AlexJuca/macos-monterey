import React, {Component} from 'react'
import './App.scss';
import Dock from './components/dock/Dock'
import StatusBar from './components/statusbar/StatusBar'
import ProcessManager from './apps/manager/ProcessManager'

import Process from './lib/darwin/Process'

class App extends Component {
  main = new Process()
  dock = new Process()
  view = null

  constructor(props) {
    super(props)
    this.state = {
      processes: [
        {
          name: 'dock',
          pId: '1',
          user: "AlexJuca",
          executionTime: 90,
        }
      ],
    }
  }

  render() {
    return (
      <div>
          <StatusBar />
          <ProcessManager processes={this.state.processes} />
          <ProcessManager processes={this.state.processes} />
          <Dock />
      </div>
    );
  }
}

export default App;
