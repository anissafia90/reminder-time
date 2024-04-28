import React from "react";
import Profile from "../images/profile.webp";
import { Col, Image } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Col sm={8} className="d-flex align-items-center border-bottom w-100 my-2 ">
      <Image src={Profile} roundedCircle width={50} height={50} />
      <div className="px-3">
        <p className="d-inline fs-2">{item.Name}</p>
        <p className="fs-5">{item.Date}</p>
      </div>
    </Col>
  );
};

export default Item;
