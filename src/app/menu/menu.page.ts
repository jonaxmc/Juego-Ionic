import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  personaje:any;
  intro:any;
  suscribe:any;

  constructor(public platform: Platform,private router: Router,public loadingCtrl: LoadingController,public alertController: AlertController) { 
    /*this.suscribe = this.platform.backButton.subscribeWithPriority(666666,() => {
      if(this.constructor.name=="MenuPage"){
        if(window.confirm("Seguro de salir")){
          navigator["app"].exitApp();
        }
      }
    })*/
  }

  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.intro = new Audio();
    this.intro.src = '/assets/audio/intro1.mp3';
    this.intro.load();

    this.playAudio();
  }

  ionViewWillLeave(){
    this.intro.pause();
  }

  ionViewDidLeave(){
    console.log("aios");
  }



    irJuego1(){
      this.router.navigate(["/juego1"]);

    }

    irJuego3(){
      this.router.navigate(["/juego3"]);

    }

    irJuego2(){
      this.router.navigate(["/juego2"]);

    }

    irJuego5(){
      this.router.navigate(["/juego5"]);

    }

    irMenu2(){
      this.router.navigate(['/menu-r']);
    }

    salir(){
      if(window.confirm("Seguro de salir?")){
        navigator["app"].exitApp();
      }
    }

   
    async integrantes() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        
        message: '<ion-list><ion-item>Flores Josselyn</ion-item><ion-item>Inga Erika</ion-item><ion-item>Jácome Diana</ion-item><ion-item>Lamingo Viviana</ion-item><ion-item>Malán Melissa</ion-item><ion-item>Mañay Vanessa</ion-item><ion-item>Narváez María José</ion-item></ion-list>',
        buttons: ['OK']
      });
    
      await alert.present();
    }

    playAudio() { 
      this.intro.play();
      this.intro.loop = true;
      
      
     }
    



}
