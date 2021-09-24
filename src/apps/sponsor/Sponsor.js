import React from "react"
import Window from "../../components/window/Window"
import "./sponsor.scss"

class SponsorApp extends Window {
  constructor(props) {
    super(props)
    this.state = {
      processes: props.processes,
      should_render: true,
    }
  }

  componentDidMount() {
    this.useDarkTheme(false)
    this.setWindowFixedSize(true)
    this.setCustomStyle("sponsor-app-theme")
  }

  render() {
    return this.build(
      <div>
        <div className="sponsor-profile-content">
          <img className="sponsor-profile" src="img/alex.jpeg" />
        </div>
        <div className="sponsor-content">
          <h1>Hi, I am Alexandre. Want to sponsor this project?</h1>
          <p>
            A lot of people found this project interesting and many have asked how
            they can help to keep it up and running.
          </p>

          <h5>How can you help?</h5>
          <p>
            By donating <b>$5</b>
          </p>
          <h5>What will the money be used for?</h5>
          <p>
            Your donations will help keep this project up and running. Funds will be
            used for servers costs, adding new features and making this better.
          </p>
        </div>
        <div className="sponsor-links">
          <a
            className="sponsor-button"
            target="blank"
            href="https://github.com/AlexJuca/macos-monterey"
          >
            Sponsor $5
          </a>
          <i className="hidden-emoji">😊</i>
        </div>
        <div className="sponsor-links">
          <a
            className="view-project-link"
            target="blank"
            href="https://github.com/AlexJuca/macos-monterey"
          >
            View project on Github
          </a>
        </div>
      </div>
    )
  }
}

export default SponsorApp
