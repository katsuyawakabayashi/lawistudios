import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import WhiteBackground from "../img/bgw.png";

const works = (props) => {
  return (
    <>
      <Card
        title=""
        body="Behind the scenes"
        moreNav="true"
        button={<Link to="/gallery">Peep</Link>}
      />
    </>
  );
};

export default works;
