import React from "react"
import { PropTypes } from "prop-types"

/** Wrapper for scrolling to root-level Models */
const Wrapper = (Ori, system) => class ModelLinkWrapper extends React.Component {

  static propTypes = {
    modelName: PropTypes.object.isRequired,
    isRoot: PropTypes.bool.isRequired
  }

  onLoad = (ref) => {
    const { modelName, isRoot } = this.props
    if (isRoot) {
      const isShownKey = ["models", modelName ];
      system.layoutActions.readyToScroll(isShownKey, ref.parentElement)
    }
  }

  render() {
    return (
      <span ref={this.onLoad}>
        <Ori {...this.props} />
      </span>
    )
  }
}

export default Wrapper
