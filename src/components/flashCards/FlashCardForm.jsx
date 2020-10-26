import React, { Component } from "react";

class CreateCard extends Component {
  render() {
    const { onSubmit, renderInput, renderButton } = this.props;
    return (
      
        <form className="form-card" onSubmit={onSubmit}>
          {renderInput("term", "Wite your word")}
          {renderInput("meaning", "Word Meaning")}
          {renderButton("Add Card")}
        </form>
    );
  }
}

export default CreateCard;
