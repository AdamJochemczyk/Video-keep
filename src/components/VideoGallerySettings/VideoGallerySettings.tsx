import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const VideoGallerySettings = () => {
  return (
    <Container className="mt-3 p-3 shadow-lg" style={{ width: "75%" }}>
      <Row className="d-flex">
        <Col sm="12" md="3" className="d-flex flex-column">
          <label>Display method:</label>
          <select className="form-control">
            <option>Gallery</option>
            <option>List</option>
          </select>
        </Col>
        <Col sm="12" md="2" className="d-flex flex-column">
          <label>Elements on page:</label>
          <select className="form-control">
            <option>20</option>
            <option>40</option>
            <option>60</option>
          </select>
        </Col>
        <Col sm="12" md="2" className="d-flex flex-column">
          <div>Page:</div>
          <div className="d-flex justify-content-around align-items-center">
            <button>&#60;</button>
            <p>1 z 10</p>
            <button>&#62;</button>
          </div>
        </Col>
        <Col
          sm="12"
          md="3"
          className="d-flex justify-content-around align-items-center"
        >
          <Button color="danger">Delete all</Button>
          <Button color="secondary">Demo videos</Button>
        </Col>
        <Col sm="12" md="2" className="d-flex flex-column">
          <label>Sort by:</label>
          <select className="form-control">
            <option>Oldest</option>
            <option>Newest</option>
            <option>Favorite</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoGallerySettings;
