import React, {Component} from 'react'
import './window.scss'

class Window extends Component {
    data = null
    constructor(props) {
        super(props)
        this.state = {
            title: props.title == null || undefined ? "App" : props.title,
            maximizable: true,
            children: props.children
        }
    }

    componentDidMount() {
        
    }
     
    build(views) {
        return (
              <div className="darwin-window-light-theme">
                  <div className="window-control-wrapper">
                      <div className="window-controls">
                          <span className="wc-icon close-button"></span>
                          <span className="wc-icon minimize-button"></span>
                          <span className="wc-icon maximize-button"></span>
                      </div>
                  </div>
                  <div className="window-content">
                      {views}
                  </div>
              </div>
        );
    }
}

export default Window