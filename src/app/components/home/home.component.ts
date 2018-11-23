import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../providers/youtube.service";

declare var $:any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {

  public videos:any[] = [];
  public videoSeleccionado:any;

  constructor(private youtubeService: YoutubeService) {
    youtubeService.getVideos().subscribe(data => {
      console.log(data);
      this.videos = data;
    });
  }

  ngOnInit() {}

  verVideo(video:any) {
    console.log("ver video", video);
    this.videoSeleccionado = video;
    $('#videoModal').modal();
    
  }
}
