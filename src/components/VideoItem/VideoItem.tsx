import React from "react";
import { Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import { AwesomeButton,VideoViewer } from "../../components";
import { useVideoItem } from "./useVideoItem";
import { VideoData } from "../../app/data/videoSlice";

const VideoItem: React.FC<{ props: VideoData }> = ({ props }): JSX.Element => {
  const {
    id,
    addedAt,
    isFavorite,
    videoPlatform,
    modal,
    dataFromAPI,
    isLoading,
    isError,
    handleAddToFavorite,
    handleDelete,
    handleImageError,
    toggleModal,
  } = useVideoItem(props);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Col className="m-2 p-2 shadow-lg d-flex flex-column">
          <h2 className={`text-center ${isError && "text-danger"}`}>{isError ? "Something went wrong" : dataFromAPI?.title}</h2>
          {!isError && <div className="mb-2 p-1 d-flex justify-content-center">
            <picture>
              <source
                srcSet={dataFromAPI?.maxres}
                media="(min-width:1270px)"
              ></source>
              <source
                srcSet={dataFromAPI?.standard}
                media="(min-width:630px)"
              ></source>
              <source
                srcSet={dataFromAPI?.high}
                media="(min-width:470px)"
              ></source>
              <img
                style={{ maxWidth: "100%" }}
                src={dataFromAPI?.medium}
                alt="miniature of video"
                onError={handleImageError}
              />
            </picture>
          </div>}
          <div className="d-flex justify-content-around">
            <p>
              <span>Views:</span> {dataFromAPI?.viewCount}
            </p>
            <p>
              <span>Likes:</span> {dataFromAPI?.likeCount}
            </p>
          </div>
          <p className="text-center">Added to library at: {addedAt}</p>

          <div className="d-flex justify-content-center">
            <AwesomeButton onClick={toggleModal}>
              <i className="fas fa-tv"></i>
            </AwesomeButton>
            <AwesomeButton onClick={handleDelete}>
              <i className="fas fa-trash" />
            </AwesomeButton>
            <AwesomeButton onClick={handleAddToFavorite}>
              <i
                className="fas fa-heart"
                style={{ color: isFavorite ? "red" : "black" }}
              ></i>
            </AwesomeButton>
            <Modal isOpen={modal} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>
                <p className="text-center">{dataFromAPI?.title}</p>
              </ModalHeader>
              <ModalBody>
                <VideoViewer videoId={id} videoPlatform={videoPlatform}></VideoViewer>
              </ModalBody>
            </Modal>
          </div>
        </Col>
      )}
    </>
  );
};

export default VideoItem;
