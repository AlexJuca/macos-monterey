import React from "react"
import PropType from "prop-types"
import "./spinner.scss"

const SpinningLoader = (props) => {
  const { progress_color } = props
  return (
    <div>
      <div id="loading-spinner">
        <div style={{ color: progress_color }} className="spin-icon"></div>
      </div>
      <p style={{ marginTop: "10px" }}>Loading...</p>
    </div>
  )
}

SpinningLoader.propTypes = {
  progress_color: PropType.string,
}

export default SpinningLoader
