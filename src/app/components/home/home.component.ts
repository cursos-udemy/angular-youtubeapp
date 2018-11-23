import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../providers/youtube.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {

  public videos:any[] = [];

  constructor(private youtubeService: YoutubeService) {
    youtubeService.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data;
    });
  }

  ngOnInit() {}
}
