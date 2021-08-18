import React from "react";

import "./Card.css";

const Card = (props) => {
  const combine_css = "card " + props.className; //whitespace

  return <div className={combine_css}>{props.children}</div>;
};

export default Card;
