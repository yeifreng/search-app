import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(private gifService:GifsService){

  }



  //me permite acceder a elementos del DOM nativo
  //que tengan una variable de referencia de plantilla
  //en este caso accedo al input con referencia #txtTagInput
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(){
    //Solicito la propiedad value de ese input
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
