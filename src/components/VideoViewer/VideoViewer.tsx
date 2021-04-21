import React from 'react'
import {notifier,NotificationType} from '../Notifier/useNotifier'

const VideoViewer: React.FC<{ videoId: string; videoPlatform: string }> = (props): JSX.Element => {
  const { videoId, videoPlatform } = props;

  const constructUrl=(videoId:string,videoPlatform:string)=>{
    switch(videoPlatform){
        case "Youtube":
            return `https://www.youtube.com/embed/${videoId}`;
        case "Vimeo":
            return `https://player.vimeo.com/video/${videoId}?badge=0`;
        default:
            notifier(NotificationType.error,"We can't show you video now")
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
