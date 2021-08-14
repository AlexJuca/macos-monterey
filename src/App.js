import React, {Component} from 'react'
import './App.scss';
import Dock from './components/dock/Dock'
import StatusBar from './components/statusbar/StatusBar'
import ProcessManager from './apps/manager/ProcessManager'
import TrexGame from './apps/t-rex/TrexGame'
import Process from './lib/darwin/Process'
import HelloWorld from './apps/hello-world/HelloWorld';

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
          user: "System",
          executionTime: 90,
        },
        {
          name: 'T-Rex',
          pId: '2',
          user: "AlexJuca",
          executionTime: 90,
        },
        {
          name: 'Hello World',
          pId: '3',
          user: "AlexJuca",
          executionTime: 90,
        },{
          name: 'Process Manager',
          pId: '4',
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
          <TrexGame />
          <ProcessManager processes={this.state.processes} />
          <HelloWorld />
          <Dock />
      </div>
    );
  }
}

export default App;
