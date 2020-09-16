import React from "react";
import addIcon from "../../assets/icons/add-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";
import { Link } from "react-router-dom";

const CategorySummary = () => (
  <div className="category-summary">
    <div className="card">
      <h2>
        <Link to="/create-card">Names&Verbs</Link>
      </h2>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
      <p>Add Card.</p>
      <div className="pic"></div>
      <div className="social">
        <Link to="/category/:id">
          <img
            className="social-icon"
            src={addIcon}
            alt={addIcon}
            width="20px"
          />
        </Link>
        <Link to="/category/:id">
          <img
            className="social-icon"
            src={editIcon}
            alt={editIcon}
            width="20px"
          />
        </Link>
        <Link to="/category/:id">
          <img
            className="social-icon"
            src={deleteIcon}
            alt={deleteIcon}
            width="20px"
          />
        </Link>
      </div>
      <button></button>
    </div>
  </div>
);

export default CategorySummary;
