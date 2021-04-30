import React, {Component} from "react";
import Cards from "./cards";
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    return (
      <div className="section">
        <h1 className="sectionHeader">{this.props.header}</h1>
        <span className="sectionLine"></span>
        <div>
          <Cards
            articles={this.props.articles}
            bigCards={this.props.bigCards}
          ></Cards>
        </div>
      </div>
    )
  }
}

export default Section;
