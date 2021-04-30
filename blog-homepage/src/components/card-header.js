import PropTypes from "prop-types";
import React, { Component } from "react";

class CardHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    audioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,
  };

  render = () => {
    let additionalInfo = [];
    if (this.props.audioAvailable) {
      additionalInfo.push(<div>📢 Audio Available</div>);
    }

    if (this.props.memberPreview) {
      additionalInfo.push(<div>⭐️ Member Preview</div>);
    }
    return (
      <div className="cardHeader">
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
      </div>
    );
  };
}

export default CardHeader;
