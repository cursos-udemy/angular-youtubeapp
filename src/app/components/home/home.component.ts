import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../providers/youtube.service";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  public videos: any[] = [];
  public videoSeleccionado: any;

  constructor(private youtubeService: YoutubeService) {
    youtubeService.getVideos().subscribe(data => {
      this.videos = data;
    });
  }

  ngOnInit() {}

  verVideo(video: any) {
    this.videoSeleccionado = video;
    $("#videoModal").modal();
  }

  public cerrarModal() {
    this.videoSeleccionado = null;
    $("#videoModal").modal("hide");
  }

  public cargarMasVideos() {
    this.youtubeService.getVideos().subscribe(data => {
      this.videos.push.apply(this.videos, data);
    });
  }
}
