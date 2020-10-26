import React, { Component } from "react";
import FlashCardItem from "./FlashCardItem";
import NavButtons from "./NavButtons";

class FlashCardsList extends Component {
  state = {
    cardIndex: 0,
  };
  arrowHandler = (left) => {
    const { cardIndex } = this.state;
    if (left) {
      if (cardIndex - 1 >= 0) {
        this.setState({ cardIndex: cardIndex - 1 });
      }
    } else {
      if (cardIndex + 1 < this.props.cards.length) {
        this.setState({ cardIndex: cardIndex + 1 });
      }
    }
  };
  render() {
    return (
      <div className="flashcard-viewer noselect">
        {console.log("cards", this.props.cards)}
        <FlashCardItem
          cardIndex={this.state.cardIndex}
          cards={this.props.cards[this.state.cardIndex]}
        />
        <div>
          <NavButtons
            arrowHandler={this.arrowHandler}
            cardIndex={this.state.cardIndex}
            cardLength={this.props.cards.length}
          />
        </div>
      </div>
    );
  }
}
export default FlashCardsList;
