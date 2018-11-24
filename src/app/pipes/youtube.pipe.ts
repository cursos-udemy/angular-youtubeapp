import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor (private domSanitizer:DomSanitizer) {

  }

  transform(value: string): any {
    const url:string = "https://www.youtube.com/embed/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${url}/${value}?constrols=0`);
  }

}
