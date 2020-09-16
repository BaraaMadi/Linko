import React from "react";
import CategorySummary from "./CategorySummary";

const CategoiesList = () => (
  <div className="wrapper-contnet text-center categoies-list">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-xs-12">
          <CategorySummary />
        </div>
        <div className="col-lg-4 col-md-6 col-xs-12">
          <CategorySummary />
        </div>
        <div className="col-lg-4 col-md-6 col-xs-12">
          <CategorySummary />
        </div>
      </div>
    </div>
  </div>
);

export default CategoiesList;
