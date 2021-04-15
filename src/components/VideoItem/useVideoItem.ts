import {SyntheticEvent} from "react";

export const useVideoItem=()=>{

    const handleWatch = () => {
      console.log("handleWatch");
    };
    const handleAddToFavorite = () => {
      console.log("handleAddToFavorite");
    };
    const handleDelete = () => {
      console.log("handleDelete");
    };
    const handleImageError=(ev:SyntheticEvent<HTMLImageElement>)=>{
        const target=ev.target as HTMLImageElement;
        target.src =
          "/imgNotFound.png";
    }

    return {
      handleWatch,
      handleAddToFavorite,
      handleDelete,
      handleImageError,
    };
}