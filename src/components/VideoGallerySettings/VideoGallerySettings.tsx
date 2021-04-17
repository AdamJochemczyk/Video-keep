import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {RoundedButton} from '../../components';

import {useGallerySettings} from './useGallerySettings';
const VideoGallerySettings = () => {
  
  const {
    page,
    maxPage,
    displayMethod,
    elementsOnPage,
    sortMethod,
    handleDisplayMethodChange,
    handleElementsOnPageChange,
    handlePrevPage,
    handleNextPage,
    handleSortChange,
    handleDeleteAll,
    handleShowDemoVideos,
    handleShowMyVideos,
    toggleVideos,
  } = useGallerySettings();

  return (
    <Container className="mt-3 p-3 shadow-lg" style={{ width: "75%" }}>
      <Row className="d-flex">
        <Col sm="12" md="3" className="d-flex flex-column">
          <label>Display method:</label>
          <select
            className="form-control"
            onChange={handleDisplayMethodChange}
            defaultValue={displayMethod}
          >
            <option value="gallery">Gallery</option>
            <option value="list">List</option>
          </select>
        </Col>
        <Col sm="12" md="2" className="d-flex flex-column">
          <label>Elements on page:</label>
          <select
            className="form-control"
            onChange={handleElementsOnPageChange}
            defaultValue={elementsOnPage}
          >
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </Col>
        <Col sm="12" md="2" className="d-flex flex-column">
          <div>Page:</div>
          <div className="d-flex justify-content-around align-items-center">
            <RoundedButton onClick={handlePrevPage}>&#60;</RoundedButton>
            <p>
              {page} of {maxPage}
            </p>
            <RoundedButton onClick={handleNextPage}>&#62;</RoundedButton>
          </div>
        </Col>
        <Col
          sm="12"
          md="3"
          className="d-flex justify-content-around align-items-center"
        >
          <Button color="danger" onClick={handleDeleteAll}>
            Delete all
          </Button>
          {toggleVideos ? 
          <Button color="secondary" onClick={handleShowDemoVideos}>
            Demo videos
          </Button> 
          :<Button color="secondary" onClick={handleShowMyVideos}>
            My videos
          </Button> }
        </Col>
        <Col sm="12" md="2" className="d-flex flex-column">
          <label>Sort by:</label>
          <select
            className="form-control"
            onChange={handleSortChange}
            defaultValue={sortMethod}
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="favorite">Favorite</option>
          </select>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoGallerySettings;
