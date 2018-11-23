import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private youtubeURL: string = "https://www.googleapis.com/youtube/v3";
  private apikey: string = "AIzaSyBvfarg4e24YV7Y3V3ese9S9HzbbjNHtOI";
  private playlist: string = "UUuaPTYj15JSkETGnEseaFFg";
  private nextPageToken: string = "CAoQAA";
  //uploads: UUuaPTYj15JSkETGnEseaFFg
  //FORMSMODULE????

  constructor(public http: HttpClient) {
    console.log("YoutubeService [OK]");
  }

  public getVideos() {
    const url = `${this.youtubeURL}/playlistItems`;

    const paramsURL = new HttpParams()
      .append("part", "snippet")
      .append("maxResults", "10")
      .append("playlistId", this.playlist)
      .append("key", this.apikey);

    return this.http.get(url, { params: paramsURL }).pipe(
      map((data: any) => {
        this.nextPageToken = data.nextPageToken;
        console.log("nextPageToken:", this.nextPageToken);
        console.log(data);
        
        let videos:any[] = [];
        for (let item of data.items) {
          videos.push(item.snippet);
        }        
        return videos;
      })
    );
  }
}
