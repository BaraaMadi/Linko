import React from 'react';
import { Link } from "react-router-dom";

const OptionImage = ({ option, id }) => (
  <Link to={`/category-home/${id}`}>
    <img className="social-icon" src={option} alt={option} width="20px" />
  </Link>
);
 
export default OptionImage;