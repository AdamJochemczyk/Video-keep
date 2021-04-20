import { VideoInputData } from "../pages/AddVideoForm/useAddVideoForm";
import { VideoPlatform } from "../pages/AddVideoForm/useAddVideoForm";
import { notifier, NotificationType } from "../components/Notifier/useNotifier";


class PlatformVideoIdGetters {
  
  private getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      notifier(NotificationType.error,"Can't get id from this link");
    }
  };
  private getVimeoVideoId = (url: string) => {
    const match = /vimeo.*\/(\d+)/i.exec(url);
    if (match) {
      return match[1];
    } else {
      notifier(NotificationType.error, "This isn't vimeo link");
    }
  };

  getVideoIdByPlatform(data: VideoInputData) {
    switch (data.platform) {
      case VideoPlatform.youtube:
        return this.getYoutubeVideoId(data.link);
      case VideoPlatform.vimeo:
        return this.getVimeoVideoId(data.link);
      default:
        notifier(NotificationType.error,"Something went wrong");
    }
  }
}

export const platformVideoIdGetters=new PlatformVideoIdGetters();