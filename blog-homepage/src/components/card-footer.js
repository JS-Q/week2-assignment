import React, {Component} from "react";
import PropTypes from "prop-types";

class CardFooter extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  }

  render = () => {
    const date = new Date(this.props.article.postedDate);
    const formattedDate = formatDate({
      month: date.getMonth(),
      day: date.getDate(),
    })
    return <div className="cardFooter">
      <img alt="" src={this.props.article.author.image}></img>
      <br></br>
      <span>{this.props.article.author.name}</span>
      <br></br>
      {formattedDate}
      <br></br>
      {`${this.props.article.minutesToRead} min read`}
      {/* <span></span> */}
    </div>;
  }
}

function formatDate ({month, day}) {
  let formattedDate = "";
  switch(month) {
    case 0: formattedDate += "Jan"; break;
    case 1: formattedDate += "Feb"; break;
    case 2: formattedDate += "Mar"; break;
    case 3: formattedDate += "Apr"; break;
    case 4: formattedDate += "May"; break;
    case 5: formattedDate += "Jun"; break;
    case 6: formattedDate += "Jul"; break;
    case 7: formattedDate += "Aug"; break;
    case 8: formattedDate += "Sep"; break;
    case 9: formattedDate += "Oct"; break;
    case 10: formattedDate += "Nov"; break;
    case 11: formattedDate += "Dec"; break;
    default: formattedDate += ""
  }

  return `${formattedDate} ${day}`
}
export default CardFooter;
