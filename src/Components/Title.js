import React from "react";
import { Col, Row } from "react-bootstrap";

const Title = ({ count }) => {
  return (
    <Row className="py-4">
      <Col sm={12}>
        <h1> You have {count.length} Dates</h1>
      </Col>
    </Row>
  );
};

export default Title;
