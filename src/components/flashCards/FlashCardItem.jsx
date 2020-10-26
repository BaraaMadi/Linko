import React, { Component } from "react";
import { Fragment } from "react";

class FlashCardItem extends Component {
  state = {
    flipped: false,
    flipStyle: { transition: "transform 0.5s" },
  };
  componentDidUpdate(prevProps) {
    if (prevProps.cardIndex !== this.props.cardIndex) {
      this.setState({
        flipped: false,
        flipStyle: {},
      });
    }
  }
  clickHandler = () => {
    this.setState({
      flipped: !this.state.flipped,
      flipStyle: { transition: "transform 0.5s" },
    });
  };
  render() {
    const rotation = this.state.flipped ? 180 : 0;
    const frontStyle = {
      ...this.state.flipStyle,
      transform: `rotateY(${rotation}deg)`,
    };
    const backStyle = {
      ...this.state.flipStyle,
      transform: `rotateY(${180 + rotation}deg)`,
    };
    return (
      <div className="flashcard-item" onClick={() => this.clickHandler()}>
        {this.props.cards && (
          <Fragment key={this.props.cards.id}>
            <div className="flashcard-item-inner" style={frontStyle}>
              {/* <div className="flashcard-item-helper">front</div> */}
              {this.props.cards.term}
            </div>
            <div className="flashcard-item-inner" style={backStyle}>
              {/* <div className="flashcard-item-helper">back</div> */}
              {this.props.cards.meaning}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
export default FlashCardItem;
