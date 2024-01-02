import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'NkEP8JmPiLRJBOpbGVb7kKDkaHZmz9Ma';
  private url: string = 'https://api.giphy.com/v1/gifs';

  constructor(private httpClient:HttpClient){
    this.lowLocalStorage();
   }

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
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify (this._tagsHistory));
  }

  private lowLocalStorage():void{
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);

  }

  searchTag(tag:string){

    if(tag.length===0) return;//Pregunto si el tamaño del array es 0 para que no permita insertar valores vacios
    this.organizeHistory(tag); // Me traigo la logica de la función

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')

    this.httpClient.get<SearchResponse>(`${this.url}/search`, {params}).subscribe(respuesta=>{
      this.gifList = respuesta.data;
      console.log(this.gifList);
    })
  }

}
