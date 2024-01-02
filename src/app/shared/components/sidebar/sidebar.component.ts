import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService:GifsService){}

  get tags(){
    return this.gifService.tagsHistory;
  }

  setTag(tag:string){
    this.gifService.searchTag(tag);
  }

}
