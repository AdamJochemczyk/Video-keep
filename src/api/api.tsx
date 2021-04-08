import axios from "axios";

class YtVideoDataRequester {
  private ytKey = process.env.REACT_APP_YT_API_KEY;

  async callToYTapi(id: string) {
    const response= await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${this.ytKey}`
    );
    return response.data;
  }
}

export const ytVideoDataRequester = new YtVideoDataRequester();
