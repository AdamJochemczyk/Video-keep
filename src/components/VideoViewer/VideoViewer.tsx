import React from 'react'

const VideoViewer: React.FC<{ videoId: string; videoPlatform: string }> = (props): JSX.Element => {
  const { videoId, videoPlatform } = props;

  const constructUrl=(videoId:string,videoPlatform:string)=>{
    switch(videoPlatform){
        case "youtube":
            return `https://www.youtube.com/embed/${videoId}`;
        case "vimeo":
            return `https://player.vimeo.com/video/${videoId}?badge=0`;
        default:
            console.log("Error")
    }
  }

  return (
    <div>
      <iframe
        src={constructUrl(videoId, videoPlatform)}
        title={`${videoPlatform} video player"`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoViewer
