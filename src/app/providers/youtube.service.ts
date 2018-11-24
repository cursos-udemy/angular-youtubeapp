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
  private nextPageToken: string;
  //uploads: UUuaPTYj15JSkETGnEseaFFg

  constructor(public http: HttpClient) {
    console.log("YoutubeService [OK]");
  }

  public getVideos() {
    const url = `${this.youtubeURL}/playlistItems`;

    let paramsURL = new HttpParams()
      .append("part", "snippet")
      .append("maxResults", "10")
      .append("playlistId", this.playlist)
      .append("key", this.apikey);

    if (this.nextPageToken) {
      paramsURL = paramsURL.append("pageToken",this.nextPageToken);
    }

    return this.http.get(url, { params: paramsURL }).pipe(
      map((data: any) => {
        this.nextPageToken = data.nextPageToken;
        console.log("nextPageToken:", this.nextPageToken);
        
        let videos:any[] = [];
        for (let item of data.items) {
          videos.push(item.snippet);
        }        
        return videos;
      })
    );
  }
}
