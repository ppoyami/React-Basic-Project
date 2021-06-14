import React from "react";
import Form from "./Form";
const Pannel = ({ commentCount }) => {
  return (
    <nav className="pannel">
      <span className="pannel__count">유저 수: {commentCount}</span>
      <Form />
    </nav>
  );
};

export default React.memo(Pannel);
