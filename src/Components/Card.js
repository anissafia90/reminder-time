import React from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";

const Card = ({ person }) => {
  return (
    <Row className="border">
      {person.length ? (
        person.map((index) => {
          return <Item key={index.id} item={index} />;
        })
      ) : (
        <h6 className="text-center py-5">Dates Not Found</h6>
      )}
    </Row>
  );
};

export default Card;
