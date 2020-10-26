import React from "react";
import { Link } from "react-router-dom";
import addIcon from "../assets/icons/add-icon.png";
import editIcon from "../assets/icons/edit-icon.png";
import deleteIcon from "../assets/icons/delete-icon.png";
import ItemOption from "./ItemOption";

const CategoryItem = ({ category }) => (
  <div className="category-summary">
    <div className="card">
      <h2>
        <Link to={`/create-card/${category.id}`}>{category.name}</Link>
      </h2>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
      <p>Add Card.</p>
      <div className="pic"></div>
      <div className="social">
        <ItemOption option={addIcon} id={category.id} />
        <ItemOption option={editIcon} id={category.id} />
        <ItemOption option={deleteIcon} id={category.id} />
      </div>
      <button></button>
    </div>
  </div>
);

export default CategoryItem;
