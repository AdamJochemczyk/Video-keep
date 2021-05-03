import axios from "axios";
import {notifier,NotificationType} from '../components/Notifier/useNotifier';

abstract class VideoDataRequester{
  async callToApi(url:string,config:Object){
    try{
      const response=await axios.get(url,config);
      return response.data;
    }catch(err){
      console.log(err);
    }
  }
}
class YtVideoDataRequester extends VideoDataRequester{

  private ytKey = process.env.REACT_APP_YT_API_KEY;

  async callToYTapi(id: string) {
    const data= await super.callToApi(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${this.ytKey}`,{}
    );
    if (data.pageInfo.totalResults !== 1) {
      notifier(NotificationType.error,"There is no video for this id");
    }
    return this.parseResponse(data);
  }

  private isUndefinedImgData(data:any){
    return data === undefined ? "" : data.url;
  }
  
  parseResponse(data:any){
    const title = data.items[0].snippet.title;
    const { viewCount, likeCount } = data.items[0].statistics;
    const { medium, high, standard, maxres } = data.items[0].snippet.thumbnails;
    const mediumImg = this.isUndefinedImgData(medium);
    const highImg = this.isUndefinedImgData(high);
    const standardImg = this.isUndefinedImgData(standard);
    const maxResImg = this.isUndefinedImgData(maxres);

    return JSON.parse(
      JSON.stringify({
        title,
        viewCount,
        likeCount,
        maxres: maxResImg,
        medium: mediumImg,
        high: highImg,
        standard: standardImg,
      })
    );
  }
}

const ytVideoDataRequester = new YtVideoDataRequester();

class VimeoVideoDataRequester extends VideoDataRequester {
  private vimeoApiKey = process.env.REACT_APP_VIMEO_API_KEY;

  parseResponse(data:any){
    const title = data.name;
    const viewCount="No data";
    const likeCount="No data";
    const standardImg = data.pictures.sizes[0].link;
    const mediumImg = data.pictures.sizes[1].link;
    const highImg = data.pictures.sizes[2].link;
    const maxResImg = data.pictures.sizes[3].link;

    return JSON.parse(
      JSON.stringify({
        title,
        viewCount,
        likeCount,
        maxres: maxResImg,
        medium: mediumImg,
        high: highImg,
        standard: standardImg,
      })
    );
  }
  async callToVimeoApi(id:string){
    const data = await super.callToApi(`https://api.vimeo.com/videos/${id}`,{
      headers:{
        'Authorization': `Bearer ${this.vimeoApiKey}`
      }
    });
     if (data.error) {
       notifier(NotificationType.error, "There is no video for this id");
     }
     return this.parseResponse(data)
  }
}

const vimeoVideoDataRequester = new VimeoVideoDataRequester();

export const getVideoDataById = async (id: string,platform: string) => {
  try {
    switch(platform){
      case "Youtube":
        return await ytVideoDataRequester.callToYTapi(id);
      case "Vimeo":
        return await vimeoVideoDataRequester.callToVimeoApi(id)
    }
  } catch (error) {
    notifier(NotificationType.error, error);
  }
};

