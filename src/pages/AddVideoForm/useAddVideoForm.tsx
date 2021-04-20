import {database} from '../../api/DatabaseManager';
import { platformVideoIdGetters } from "../../api/PlatformVideoIdGetter";

export enum VideoPlatform {
  youtube="Youtube",
  vimeo="Vimeo",
}
export type VideoInputData = {
  link: string;
  platform: VideoPlatform;
};

export const useAddVideoForm = () => {
    const prepareData=(data:VideoInputData)=>{
      const videoId = platformVideoIdGetters.getVideoIdByPlatform(data);
        return {
          ...data,
          id:videoId,
        }
    }

    const saveVideoToDB=(data:VideoInputData)=>{
      if (!database) {
        throw new Error("No connection with DB");
      }
      database.createObject("videos", prepareData(data));
    }

    const onSubmit = (data: VideoInputData) => {
       saveVideoToDB(data);
    };

  return {
    onSubmit,
  };
};
