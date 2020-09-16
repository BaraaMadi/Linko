import React from "react";
import Form from "../../common/Form";
import Joi from "joi-browser";

class CreateCategory extends Form {
  state = {
    data: { name: "" },
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    name: Joi.string().max(13).required().label(" Category Name "),
  };
  doSubmit = () => {
      console.log("good job")
  }
  render() {
    return (
      <div className="create-category">
        <form className="form-category" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Wite your category")}
          {this.renderButton("Add category")}
        </form>
      </div>
    );
  }
}

export default CreateCategory;
