import React, {Component} from "react";
import CardHeader from "./card-header";
import CardFooter from "./card-footer";
import Bookmark from "./bookmark";
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render = () => {
    return <div className="cardBigOutline">
      <div className="cardBigImageWrapper">
        <img
          alt=""
          src={this.props.article.image}
          height="75px"
          width="75px"
          ></img>
      </div>
      <div className="cardBigContent">
          <CardHeader
            title={this.props.article.title}
            description={this.props.article.description}
            audioAvailable={this.props.article.hasAudioAvailable}
            memberPreview={this.props.article.memberPreview}
          ></CardHeader>
        <div>
          <CardFooter
            article={this.props.article}
          ></CardFooter>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>;
  }
}

export default Card;

// Image - good
// Title - good
// Description - good

// Author picture/name
// Article date
// Article length
// Bookmark
// "Audio available"
// "Member preview"
