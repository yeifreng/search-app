import { Component, Input } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent {

  @Input()
  public gifsList!:Gif;

}
