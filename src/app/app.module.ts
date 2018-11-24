import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Servicios
import { YoutubeService } from './providers/youtube.service';

// pipes
import { YoutubePipe } from './pipes/youtube.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
