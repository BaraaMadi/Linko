import React from "react";
import { getFlashCards, saveCard } from "../../services/flashCardsService";
import Joi from "joi-browser";
import Form from "../common/Form";
import FlashCardsList from "./FlashCardsList";
import FlashCardForm from "./FlashCardForm";

class FlashCards extends Form {
  state = {
    // flashCards
    data: { term: "", meaning: "" },
    errors: {},
    flashCards: [],
  };
  schema = {
    id: Joi.string(),
    term: Joi.string().required().label(" Term "),
    meaning: Joi.string().required().label(" Term Meaning "),
  };
  componentDidMount() {
    this.setState({ flashCards: getFlashCards() });
    console.log("before flashCards", this.state.flashCards);
  }
  doSubmit = (data) => {
    console.log("card", data);
    const categoryId = this.props.match.params.id;
    saveCard(data, categoryId);
    console.log("after flashCards", this.state.flashCards);
    this.setState({
      data: { term: "", meaning: "" },
    });
  };
  render() {
    return (
      <div className="site-wrapper">
        <div className="section-alignment wrapper-contnet create-card">
          <div className="container">
            <h3>ADD YOUR VOCABULARY </h3>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <FlashCardForm
                  onSubmit={this.handleSubmit}
                  renderInput={this.renderInput}
                  renderButton={this.renderButton}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                {this.state.flashCards && (
                  <div className="App">
                    <FlashCardsList cards={this.state.flashCards} />
                  </div>
                )}
                {console.log(this.state.flashCards)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FlashCards;
