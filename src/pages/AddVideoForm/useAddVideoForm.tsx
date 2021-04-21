import { database } from "../../api/DatabaseManager";
import { platformVideoIdGetters } from "../../api/PlatformVideoIdGetter";
import { notifier,NotificationType} from '../../components/Notifier/useNotifier';

export enum VideoPlatform {
  youtube = "Youtube",
  vimeo = "Vimeo",
}
export type VideoInputData = {
  link: string;
  platform: VideoPlatform;
};

export const useAddVideoForm = () => {
  const prepareData = (data: VideoInputData) => {
    const videoId:string = platformVideoIdGetters.getVideoIdByPlatform(data);
    return {
      ...data,
      isFavorite: false,
      addedAt: new Date().toISOString().substring(0, 10),
      id: videoId,
    };
  };

  const saveVideoToDB = (data: VideoInputData) => {
    if (!database) {
      notifier(NotificationType.error, "No connection with DB, try later");
    }
    const dbRecord = prepareData(data);
    if(dbRecord.id!==""){
      database.createObject("videos", prepareData(data));
    }
  };

  const onSubmit = (data: VideoInputData) => {
    saveVideoToDB(data);
    notifier(NotificationType.success,"You added a video to library");
  };

  return {
    onSubmit,
  };
};
