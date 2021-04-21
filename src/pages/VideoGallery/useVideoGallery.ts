import {useState,useEffect,useCallback} from 'react';
import {useSelector} from "react-redux";
import { possibleSortMethods, selectDisplayMethod, selectElementsOnPage, selectPage, selectSortBy } from '../../app/data/gallerySettingsSlice';
import {selectVideos,VideoData} from '../../app/data/videoSlice';

export const useVideoGallery =()=>{
    const [videos, setVideos] = useState<VideoData[]>([]);
    const storedVideos = useSelector(selectVideos);
    const displayMethod=useSelector(selectDisplayMethod);
    const selectedPage=useSelector(selectPage);
    const elementsOnPage=useSelector(selectElementsOnPage);
    const sortMethod=useSelector(selectSortBy)
    //TODO: depeonds on settings return filtered/sorted videos return type of display/pagination
    const showOnlyFavoriteVideos=(videos:VideoData[])=>{
      return videos.filter(video=>video.isFavorite===true)
    }

    const sortByDateDesc = (videos: VideoData[]) => {
      return videos.slice().sort((a, b) =>
        new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime());
    };

    const sortByDateAsc = (videos: VideoData[]) => {
      return videos.slice().sort((a, b) =>
        new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
      );
    };
    
    
    const sortVideos = useCallback(
      (videos: VideoData[], method: possibleSortMethods) => {
        switch (method) {
          case "favorite":
            return showOnlyFavoriteVideos(videos);
          case "newest":
            return sortByDateAsc(videos);
          case "oldest":
            return sortByDateDesc(videos);
        }
      },[]);
    
    useEffect(() => {
      setVideos(sortVideos(storedVideos,sortMethod));
    }, [sortVideos,storedVideos,sortMethod]);

    return {displayMethod,videos}
}