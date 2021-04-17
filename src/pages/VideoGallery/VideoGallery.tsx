import React from 'react';
import {Container,Row} from 'reactstrap';
import {VideoItem,VideoGallerySettings} from '../../components';
import {useVideoGallery} from './useVideoGallery';

const VideoGallery = () => {

    const {videos}=useVideoGallery();

    return (
      <Container>
        <VideoGallerySettings/>
        <Row xs="1" md="5" className="d-flex justify-content-center mt-3">
          {videos.length===0 ? "You don't have videos in gallery" : 
          videos.map(video=><VideoItem props={video} key={video.id} />)}
        </Row>
      </Container>
    );
}

export default VideoGallery
