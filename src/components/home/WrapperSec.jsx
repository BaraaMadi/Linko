import React from "react";
import { Link } from "react-router-dom";
import ImageWrapper from "../assets/images/image-wrapper.svg";

const WrapperSec = () => (
  <div className="section-alignment wrapper-contnet">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div className="image-wrapper">
            <img src={ImageWrapper} alt={ImageWrapper} />
          </div>
        </div>
        <div className="col-lg-6 col-xs-12 headline-wrapper">
          <h3 className="h1">Making every student unstoppable.</h3>
          <p>
            LINKO making studying a breeze! No more huge stacks of flashcards,
            No morelost notes.
          </p>
          <Link to="/category-home" className="btn-app">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default WrapperSec;
