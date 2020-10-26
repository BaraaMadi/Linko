import React from 'react'

const NavButtons = (props) => {
  const leftStyle = props.cardIndex - 1 < 0 ? { opacity: 0.5 } : {};
  const rightStyle =
    props.cardIndex + 1 >= props.cardLength ? { opacity: 0.5 } : {};
  return (
    <div className="nav-buttons-wrapper">
      <div
        className="nav-arrow-btn"
        style={leftStyle}
        onClick={() => props.arrowHandler(true)}
      >
        &larr;
      </div>
      {`${props.cardIndex + 1}/${props.cardLength}`}
      <div
        className="nav-arrow-btn"
        style={rightStyle}
        onClick={() => props.arrowHandler(false)}
      >
        &rarr;
      </div>
    </div>
  );
};
export default NavButtons;