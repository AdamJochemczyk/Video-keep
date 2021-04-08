import axios from "axios";
import { ytVideoDataRequester } from "./api";

export const getVideoDataById=async (id:string)=>{
  try{
    const data = await ytVideoDataRequester.callToYTapi(id);
    //liczba odtworzen
    //liczba polubien
    //nazwa
    //opis
    //miniaturka
    //data dodania do biblioteki
      if (
        data.pageInfo.totalResults === 0 ||
        data.pageInfo.totalResults > 1
      ) {
        throw new Error("There is no video for this id");
      }
    console.log(data)
  }catch(error){
    throw new Error(error);
  }
}
