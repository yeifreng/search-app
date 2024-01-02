import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  private apiKey: string = 'NkEP8JmPiLRJBOpbGVb7kKDkaHZmz9Ma';


  get tagsHistory(){
    return this._tagsHistory;
  }

  organizeHistory(tag:string){
    tag = tag.toLowerCase(); //Coloco los elementos del array en minuscula
    if(this._tagsHistory.includes(tag)){//Pregunto si el elemento insertado ya existe en mi array
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag) //Si ya existe pido que lo filtre y lo reemplace
    }

    this._tagsHistory.unshift(tag);//Luego que lo reemplace que lo coloque al inicio del array
    this._tagsHistory = this.tagsHistory.splice(0,10); //Aqui lomito la lista hasta 10 posiciones
  }

  searchTag(tag:string){
    if(tag.length===0) return;//Pregunto si el tamaño del array es 0 para que no permita insertar valores vacios
    this.organizeHistory(tag); // Me traigo la logica de la función
  }

}
