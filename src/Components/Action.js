import { Button, Col, Row } from "react-bootstrap";

const Action = ({ viewData, deleteData }) => {
  return (
    <Row className="justify-content-center my-3">
      <Col sm={8} className="d-flex justify-content-between">
        <Button className="btn btn-primary" onClick={viewData}>
          Show All Dates
        </Button>
        <Button className="btn btn-primary" onClick={deleteData}>
          Remove All Dates
        </Button>
      </Col>
    </Row>
  );
};

export default Action;
