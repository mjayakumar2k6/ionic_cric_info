import { Component } from '@angular/core';
import { Player } from './home.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  players:Player[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit(): void {
    console.log("Player page : ngOnInit");
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.players = this.playerService.getAllPlayers();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("Player page : ngOnDestroy");
  }

  goToPlayerDetails(player: Player){
    this.router.navigate([player.id, player], {relativeTo: this.route})
  }

  ionViewWillEnter() {
    console.log("Player page : ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("Player page : ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("Player page : ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("Player page : ionViewDidLeave");
  }
}
