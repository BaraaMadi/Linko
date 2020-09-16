import React from 'react'
import CardSummary from './CardSummary';

const CardList = () => (
  <div className="wrapper-contnet text-center card-list">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-xs-12">
          <CardSummary />
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <CardSummary />
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <CardSummary />
        </div>
        <div className="col-lg-3 col-md-6 col-xs-12">
          <CardSummary />
        </div>
      </div>
    </div>
  </div>
);
 
export default CardList;