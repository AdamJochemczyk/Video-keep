import {SyntheticEvent,useState,useEffect} from "react";
import { VideoData } from "../../app/data/videoSlice";
import {getVideoDataById} from '../../api/api';
import { IVideoItem } from "../componentInterfaces";
import { useDispatch } from "react-redux";
import {addVideoToFavoriteByVideoId,deleteVideo} from '../../app/data/videoSlice';


export const useVideoItem=(props:VideoData)=>{
  
  const { id, addedAt, isFavorite,videoPlatform } = props;

  const dispatch = useDispatch()

  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [dataFromAPI, setDataFromAPI] = useState<IVideoItem>();
  const [isError,setIsError]=useState(false);

  const toggleModal = () => setModal(!modal);
  
  const getDataFromAPI=async (videoId:string)=>{
    setIsLoading(true);
    try{
          const data = await getVideoDataById(videoId);
          setDataFromAPI(data as IVideoItem);
    }
    catch(error){
      setIsError(true)
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDataFromAPI(id);
  },[id])

  const handleAddToFavorite = () => {
    //TODO: update it in DB
    dispatch(addVideoToFavoriteByVideoId({id} as VideoData));
  };
  const handleDelete = () => {
    //TODO: update it in DB
    dispatch(deleteVideo({ id } as VideoData));
  };
  const handleImageError = (ev: SyntheticEvent<HTMLImageElement>) => {
    const target = ev.target as HTMLImageElement;
    target.src = "/imgNotFound.png";
  };

  return {
    videoData:{
      id,
      videoPlatform
    },
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
  };
}