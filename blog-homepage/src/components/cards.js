import React, { Component } from "react";
import Card from "./card";
import PropTypes from 'prop-types';

class Cards extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    bigCards: PropTypes.bool.isRequired
  };

  render() {
    const items = [];
    for(let i = 0; i < this.props.articles.length; i++) {
      items.push(
        <Card
          article={this.props.articles[i]}
          big={this.props.bigCards}
        >
        </Card>
      )
    }
      return (
        <>
        <div className="cards">
          {items}
        </div>
        </>
      );
  }
}

export default Cards;
