import React from 'react';
import {Container,Row} from 'reactstrap';
import {VideoItem,VideoGallerySettings, VideoListItem} from '../../components';

import {useVideoGallery} from './useVideoGallery';

const VideoGallery = () => {

    const {displayMethod,videos}=useVideoGallery();

    return (
      <Container>
        <VideoGallerySettings />
        {videos.length === 0 && (
          <p className="text-center">You don't have videos in gallery</p>
        )}

        {displayMethod === "gallery" ? (
          <Row xs="1" md="5" className="d-flex justify-content-center mt-3">
            {videos.map((video) => (
              <VideoItem props={video} key={video.id} />
            ))}
          </Row>
        ) : (
          <div className="d-flex flex-column align-items-center">
            {videos.map((video) => (
              <VideoListItem props={video} key={video.id} />
            ))}
          </div>
        )}
      </Container>
    );
}

export default VideoGallery
