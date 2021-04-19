import axios from "axios";

abstract class VideoDataRequester{
  async callToApi(url:string){
    try{
      const response=await axios.get(url);
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
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${this.ytKey}`
    );
    if (data.pageInfo.totalResults !== 1) {
      throw new Error("There is no video for this id");
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

export const getVideoDataById = async (id: string) => {
  try {
    const data = await ytVideoDataRequester.callToYTapi(id);
    return data;
  } catch (error) {
    throw new Error(error)
  }
};

