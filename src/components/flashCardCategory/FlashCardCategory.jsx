import React from "react";
import Joi from "joi-browser";
// import axios from "axios";
import { saveCategory, getCategories } from "../../services/categoriesService";
import Form from "../common/Form";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import axios from "axios";


class FlashCardCategory extends Form {
  state = {
    errors: {},
    // category
    data: { name: "" },
    categories: [],
  };
  schema = {
    id: Joi.string(),
    name: Joi.string().max(13).required().label(" Category Name "),
  };
   componentDidMount() {
    // const { data: categories } = await getCategories();
    this.setState({ categories: getCategories() });
    axios({
      method: "GET",
      url:
        "https://google-translate1.p.rapidapi.com/language/translate/v2/languages?rapidapi-key=05faa36c95msh9faea4e8407bd4dp1088e5jsne078ed1b65ef",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": "05faa36c95msh9faea4e8407bd4dp1088e5jsne078ed1b65ef",
        "accept-encoding": "application/gzip",
        useQueryString: true,
      },
      data: {
        source: "en",
        q: "Baraa",
        target: "ar",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  doSubmit = (data) => {
    console.log("category:", data);
    console.log("before:", this.state.categories);
    saveCategory(data);
    this.setState({ data: { name: "" } });
    console.log("after:", this.state.categories);
  };
  render() {
    return (
      <div className="site-wrapper">
        <div className="section-alignment-ptb wrapper-contnet">
          <div className="image-wrapper-category">
            <div className="overlay">
              <h3 className="h1">ADD YOUR CATEGORIES</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s when .
              </p>
              <CategoryForm
                onSubmit={this.handleSubmit}
                renderInput={this.renderInput}
                renderButton={this.renderButton}
              />
            </div>
          </div>
        </div>
        {this.state.categories && (
          <CategoryList categories={this.state.categories} />
        )}
      </div>
    );
  }
}

export default FlashCardCategory;
