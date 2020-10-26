import React from "react";

const CategoryForm = ({ onSubmit, renderInput, renderButton }) => (
  <div className="create-category">
    <form className="form-category" onSubmit={onSubmit}>
      {renderInput("name", "Wite your category")}
      {renderButton("Add category")}
    </form>
  </div>
);

export default CategoryForm;
