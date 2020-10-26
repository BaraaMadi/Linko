import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => (
  <div className="text-center categoies-list">
    <div className="container">
      <div className="row">
        {categories.map((category) => (
          <div className="col-lg-4 col-md-6 col-xs-12" key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CategoryList;
