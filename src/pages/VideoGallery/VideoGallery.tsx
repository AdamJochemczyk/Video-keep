import React from 'react';
import {Container,Row} from 'reactstrap';
import {VideoItem,VideoGallerySettings} from '../../components';
import { IVideoItem } from "../../components/componentInterfaces";

const testObj: IVideoItem = {
  title: "Test",
  viewCount: "1234545",
  likeCount: "123",
  defaultImg: "https://i.ytimg.com/vi/7q7DItmNzeE/maxresdefault.jpg",
  mediumImg: "",
  highImg: "",
  standardImg: "",
  maxresImg: "",
  link: "aaaa",
};

const VideoGallery = () => {
    return (
      <Container>
        <VideoGallerySettings/>
        <Row xs="1" md="5" className="d-flex justify-content-center">
          <VideoItem props={testObj} />
        </Row>
      </Container>
    );
}

export default VideoGallery
