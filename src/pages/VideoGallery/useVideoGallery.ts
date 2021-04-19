import {useState,useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectVideos,VideoData} from '../../app/data/videoSlice';

export const useVideoGallery =()=>{
    const [videos, setVideos] = useState<VideoData[]>([]);
    const storedVideos = useSelector(selectVideos);
    //TODO: depeonds on settings return filtered/sorted videos return type of display/pagination
    useEffect(() => {
      setVideos(storedVideos);
    }, [storedVideos]);

    return {videos}
}