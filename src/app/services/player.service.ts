import { Injectable } from '@angular/core';
import { Player } from '../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _players:Player[] = [
    {id: 1, name: "Sachin Tendulkar", imageurl: "1.jpg", details: "100 international centuries."},
    {id: 2, name: "K.L.Rahul", imageurl: "2.jpg", details: "Wicket keeper and right hand batsman."}
  ];
  constructor() { }

  public getAllPlayers() {
    return this._players;
  }
}
