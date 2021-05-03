import React from "react";
import { Row, Modal, ModalHeader, ModalBody } from "reactstrap";
import { AwesomeButton, VideoViewer } from "..";
import { useVideoItem } from "../VideoItem/useVideoItem";
import { VideoData } from "../../app/data/videoSlice";

const VideoListItem: React.FC<{ props: VideoData }> = ({
  props,
}): JSX.Element => {
  const {
    id,
    addedAt,
    isFavorite,
    platform,
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
        <Row
          className="m-2 p-2 shadow-lg"
          style={{ height: "300px", width: "380px" }}
        >
          <div className="d-flex">
            <div className="d-flex flex-column" style={{ width: "250px" }}>
              <h5 className={`text-center ${isError && "text-danger"}`}>
                {isError ? "Something went wrong" : dataFromAPI?.title}
              </h5>
              {!isError && (
                <div className="p-1 d-flex justify-content-center">
                  <picture onClick={toggleModal}>
                    <source srcSet={dataFromAPI?.high}></source>
                    <img
                      style={{ maxWidth: "300px", maxHeight: "150px" }}
                      src={dataFromAPI?.medium}
                      alt="miniature of video"
                      onError={handleImageError}
                    />
                  </picture>
                </div>
              )}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center m-2">
              <p className="text-center">
                <span>Views:</span> {dataFromAPI?.viewCount}
              </p>
              <p className="text-center">
                <span>Likes:</span> {dataFromAPI?.likeCount}
              </p>
              <p className="text-center">Added to library at: {addedAt}</p>
            </div>
            <div className="d-flex flex-column justify-content-center" style={{minWidth: "30px"}}>
              <AwesomeButton in="column" onClick={toggleModal}>
                <i className="fas fa-tv"></i>
              </AwesomeButton>
              <AwesomeButton in="column" onClick={handleDelete}>
                <i className="fas fa-trash" />
              </AwesomeButton>
              <AwesomeButton in="column" onClick={handleAddToFavorite}>
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
                  <VideoViewer
                    videoId={id}
                    videoPlatform={platform}
                  ></VideoViewer>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </Row>
      )}
    </>
  );
};

export default VideoListItem;