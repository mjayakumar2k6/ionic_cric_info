import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  playerId:number;
  playerName:string;
  playerDetail:string;
  ngOnInit() {
    console.log("Player Details page : ngOnInit");
    this.route.paramMap.subscribe((param: ParamMap)=>{
      this.playerId = parseInt(param.get("id"));
      this.playerName = param.get("name");
      this.playerDetail = param.get("details");
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("Player Details page : ngOnDestroy");
  }

  ionViewWillEnter() {
    console.log("Player Details Page : ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("Player Details Page : ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("Player Details Page : ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("Player Details Page : ionViewDidLeave");
  }  
}
