import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "./index.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import configureStore from "./store/configureStore"
import { isMobile } from "react-device-detect"

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {isMobile == true ? (
        <div className="run-on-desktop">
          <h1>macOS</h1>
          <h3>Monterey</h3>
          To view the preview of macOS Monterey built with JS please open this
          website via a desktop browser
          <br></br>
          <br></br>
          <a href="https://github.com/alexjuca">
            <img className="sponsor-profile" src="img/alex.jpeg" alt="author" />
          </a>
          <br></br>
          Created by <a href="https://github.com/alexjuca">Alexandre Juca</a>
          <br></br>
        </div>
      ) : (
        <App />
      )}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
