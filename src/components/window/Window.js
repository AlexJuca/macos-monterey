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
            z_index: "z-index",
            is_window_fixed_size: false,
            is_dark_theme: false,
            should_render: true,
        }
    }

    componentDidMount() {
        console.log(this.state.node_id)
    }

    terminate = () => {
        this.setState({should_render: false})
    }

    useDarkTheme(value) {
        this.setState({
            is_dark_theme: value 
        })
    }

    setWindowFixedSize(value) {
        this.setState({
            is_window_fixed_size: value
        })
    }

    getWindowFixedSizeProp() {
        return this.state.is_window_fixed_size === true ? "wc-button-disabled" : "" 
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
        this.setState({z_index: "z-index-focused"})
    }
    
    onStop = () => { }

    onDrop = (e) => {
        this.setState({z_index: "z-index"})
    };

    onDropAreaMouseEnter = (e) => { }

    onDropAreaMouseLeave = (e) => {
        e.target.classList.remove('hovered')
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
            this.state.should_render === true ? <Draggable {...dragHandlers}>
            <div className={this.state.is_dark_theme ? "darwin-window-dark-theme " : "darwin-window-light-theme "}>
              <div className="window-control-wrapper">
                  <div className="window-controls">
                      <span onClick={this.terminate} className="wc-icon close-button"></span>
                      <span className="wc-icon minimize-button"></span>
                      <span className={ this.getWindowFixedSizeProp() + " wc-icon maximize-button"}></span>
                  </div>
              </div>
              <div className="window-content">
                  {views}
              </div>
          </div>
        </Draggable> : "" 
        );
    }
}

export default Window