import React from "react";
import CreateCategory from "./CreateCategory";

const Wrapper = () => (
  <div className="section-alignment-ptb wrapper-contnet">
    <div className="image-wrapper-category">
      <div className="overlay">
        <h3 className="h1">ADD YOUR CATEGORIES</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s when .
        </p>
        <CreateCategory />
      </div>
    </div>
  </div>
);

export default Wrapper;
