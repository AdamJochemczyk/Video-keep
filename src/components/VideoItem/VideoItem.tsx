import React from "react";
import { Col } from "reactstrap";
import {AwesomeButton} from '../../components';
import { useVideoItem } from "./useVideoItem";
import {IVideoItem} from '../componentInterfaces';

const VideoItem: React.FC<{props:IVideoItem}> = ({props}) => {
  const { title, viewCount, likeCount, mediumImg, highImg, defaultImg,standardImg, maxresImg } = props;
  
  const {
    handleWatch,
    handleAddToFavorite,
    handleDelete,
    handleImageError,
  } = useVideoItem();

  return (
    <Col className="m-2 p-2 shadow-lg d-flex flex-column">
      <h2 className="text-center">{title}</h2>
      <div className="mb-2 p-1 d-flex justify-content-center">
        <picture>
          <source srcSet={maxresImg} media="(min-width:1270px)"></source>
          <source srcSet={standardImg} media="(min-width:630px)"></source>
          <source srcSet={highImg} media="(min-width:470px)"></source>
          <source srcSet={mediumImg} media="(min-width:300px)"></source>
          <img style={{maxWidth: "100%"}} src={defaultImg} alt="miniature of video" onError={handleImageError} />
        </picture>
      </div>
      <div className="d-flex justify-content-around">
        <p><span>Views:</span> {viewCount}</p>
        <p><span>Likes:</span> {likeCount}</p>
      </div>
      <p className="text-center">Added to library at: 15.04.2021</p>
      
          <div className="d-flex justify-content-center">
            <AwesomeButton onClick={handleWatch}>
              <i className="fas fa-tv"></i>
            </AwesomeButton>
            <AwesomeButton onClick={handleDelete}>
              <i className="fas fa-trash" />
            </AwesomeButton>
            <AwesomeButton onClick={handleAddToFavorite}>
              <i className="fas fa-heart"></i>
            </AwesomeButton>
          </div>
        
    </Col>
  );
};

export default VideoItem;
