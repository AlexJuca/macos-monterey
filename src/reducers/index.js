import { combineReducers } from "redux"

const dockDefaultState = {
  max_items: 13,
  visible: true,
  undocked_applications_in_execution: [
    [
      "trex",
      {
        icon: "/img/trex.png",
      },
    ],
  ],
  docked_applications: [
    [
      "finder",
      {
        icon: "img/finder.png",
      },
    ],
    [
      "launchpad",
      {
        icon: "img/launchpad.png",
        is_launcher: true,
      },
    ],
    [
      "slack",
      {
        icon: "img/slack.png",
      },
    ],
    [
      "chrome",
      {
        icon: "img/chrome.png",
      },
    ],
    [
      "imessage",
      {
        icon: "img/imessage.png",
      },
    ],
    [
      "notion",
      {
        icon: "img/notion.png",
      },
    ],
    [
      "safari",
      {
        icon: "img/safari.png",
      },
    ],
    [
      "terminal",
      {
        icon: "img/terminal.png",
      },
    ],
    [
      "calender",
      {
        icon: "img/calendar.png",
      },
    ],
    [
      "jetbrains-toolbox",
      {
        icon: "img/jetbrains-toolbox.png",
      },
    ],
    [
      "Maps",
      {
        icon: "img/maps.png",
      },
    ],
    [
      "sketch",
      {
        icon: "img/sketch.png",
      },
    ],
  ],
}

const dockReducer = (state = dockDefaultState, action) => {
  switch (action.type) {
    case "RUN_APP":
      state = {
        ...state,
        docked_applications: [...state.docked_applications, action.payload],
      }
      break
  }
  return state
}

const rootReducer = combineReducers({
  dockReducer,
})

export default rootReducer
