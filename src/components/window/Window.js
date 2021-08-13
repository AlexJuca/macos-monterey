import React, {Component} from 'react'
import Draggable from 'react-draggable';
import './window.scss'

class Window extends Component {
    data = null
    constructor(props) {
        super(props)
        this.state = {
            title: props.title == null || undefined ? "App" : props.title,
            maximizable: true,
            children: props.children,
            z_index: "z-index"
        }
    }
    
    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
    };
    
    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags, z_index: "z-index-focused"});
    };
    
    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };

    onDrop = (e) => {
        this.setState({activeDrags: --this.state.activeDrags, z_index: "z-index"});
        if (e.target.classList.contains("drop-target")) {
          alert("Dropped!");
          e.target.classList.remove('hovered');
        }
    };

    onDropAreaMouseEnter = (e) => {
        if (this.state.activeDrags) {
          e.target.classList.add('hovered');
        }
    }

    onDropAreaMouseLeave = (e) => {
        e.target.classList.remove('hovered');
    }
    
      // For controlled component
    adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
    };
    
    adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
    };
    
    onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    };
    
    onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
    };
     
    build(views) {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        return (
            <Draggable {...dragHandlers}>
                <div className={"darwin-window-light-theme " + this.state.z_index}>
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
            </Draggable>    
        );
    }
}

export default Window