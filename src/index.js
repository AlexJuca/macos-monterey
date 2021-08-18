import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dockReducer = (state = {
  width: "512px",
  height: "72px",
  max_items: 13,
  visible: true,
  undocked_applications_in_execution: [
    [
        "trex", {
            icon: "/img/trex.png"
        }
    ]
  ],
  docked_applications: [
    [
        "finder", {
            icon: "img/finder.png",
        }
    ],
    [
        "launchpad", {
            icon: "img/launchpad.png",
            is_launcher: true,
        }
    ],
    [
        "slack", {
            icon: "img/slack.png"
        }
    ],
    [
        "chrome", {
            icon: "img/chrome.png"
        }
    ],
    [
        "imessage", {
            icon: "img/imessage.png"
        }
    ],
    [
        "notion", {
            icon: "img/notion.png"
        }
    ],
    [
        "safari", {
            icon: "img/safari.png"
        },
    ],
    [
        "terminal", {
            icon: "img/terminal.png"
        }
    ],
    [
        "calender", {
            icon: "img/calendar.png"
        }
    ],
    [
        "jetbrains-toolbox", {
            icon: "img/jetbrains-toolbox.png"
        }
    ],
    [
        "Maps", {
            icon: "img/maps.png"
        }
    ],
    [
        "sketch", {
            icon: "img/sketch.png"
        }
    ]
],
}, action) => {
  switch(action.type) {
    case "RUN_APP":
      state = {
        ...state,
        docked_applications: [...state.docked_applications, action.payload]
      }
      break
  }
  return state
}

const store = createStore(
  combineReducers({dockReducer}),
  {},
  applyMiddleware()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
