import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';




@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})


export class PlayerDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private camera: Camera) { }
  playerId:number;
  playerName:string;
  playerDetail:string;

  cameraImage = [];

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  
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

  openCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cameraImage.push(base64Image);
     }, (err) => {
      alert(err);
      // Handle error
     });    
  }
}
