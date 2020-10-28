import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-juego1',
  templateUrl: './juego1.page.html',
  styleUrls: ['./juego1.page.scss'],
})
export class Juego1Page implements OnInit {

  audioCorrecto: any;
  audioIncorrecto: any;
  audio1:any;
  audio2:any;
  fondo:any;
  currentIndex:Number = 0;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  constructor(public loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
    this.audioCorrecto = new Audio();
    this.audioCorrecto.src = '/assets/audio/bien.mp3';
    this.audioIncorrecto = new Audio();
    this.audioIncorrecto.src = '/assets/audio/mal.mp3';
    this.audio1 = new Audio();
    this.audio2 = new Audio();
    this.audio2.src = '/assets/audio/correcto1.mp3';

    this.audio1.src = '/assets/audio/juego1-0.mp3';
     

  }
  ionViewDidEnter(){
    this.fondo = new Audio();
    this.fondo.src = '/assets/audio/juego1.mp3';
    this.fondo.load();

    this.playAudio();
  }

  ionViewWillLeave(){
    this.fondo.pause();
    this.audio1.pause();
  }

  ionViewWillEnter(){
    this.audio1.play();
    
  }
  playAudio() { 
    this.fondo.play();
    this.fondo.loop = true;
    
    
   }

 

  async presentAlert() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/niveles/felicidades.png"/><br><img src="assets/imagenes/bien.gif"/><br><ion-button color="success" href="/menu"><ion-icon name="home-sharp"></ion-icon></ion-button>'
    });
    await loading.present();
  }


  sliders = [
    {
      pagina: 1,
      titulo: "Selecciona al intruso",
      audio: '/assets/audio/juego1-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/cerdo.png',
          id: 1,
          correcto: 2,
        },
        {
          img: '/assets/imagenes/juego1/elefante.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego1/cerdo1.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego1/cerdo2.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 2,
      titulo: "Selecciona al intruso",
      audio: '/assets/audio/juego1-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego1/lobo1.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego1/lobo2.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/asno.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/lobo.png',
          id: 4,
          correcto: 3
        }
      ]
    },
    {
      pagina: 3,
      titulo: "Selecciona al intruso",
      audio: '/assets/audio/juego1-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego1/vaca1.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego1/vaca2.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/vaca.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego1/dalmata.png',
          id: 4,
          correcto: 4
        }
      ]
    },
    {
      pagina: 4,
      titulo: "Selecciona al intruso",
      audio: '/assets/audio/juego1-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego1/ave4.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego1/ave1.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego1/ave2.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego1/ave3.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 5,
      titulo: "Selecciona al intruso",
      audio: '/assets/audio/juego1-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego1/oveja3.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego1/oveja2.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego1/oveja1.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego5/1/oveja.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 6,
      titulo: "Selecciona al intruso",
      audio: '/assets/audio/juego1-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego1/perro1.png',
          id: 1,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego1/gato.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego1/perro2.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego1/perro3.png',
          id: 4,
          correcto: 2
        }
      ]
    }

  ]
  

  irHome() {
    this.router.navigate(["/menu"]);

  }

  reproducir(sonido) {
    this.audio1.src = sonido;
    console.log(this.audio1);
    this.audio1.play();
    
  }
  slideChanged() {
    this.slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.audio1.src = '/assets/audio/juego1-0.mp3';
      this.audio1.play();
  });
}

  next() {
    this.slides.slideNext();
    
  }

  
    
    
  

  prev() {
    this.slides.slidePrev();
    console.log("Atras");
  }

  comprobar(id, correcto,ind) {
    if (id == correcto) {
      if(ind == 6){
        this.audio2.load();
        this.audio2.play();
        this.presentAlert();
        
      }else{
        this.audioCorrecto.load();
        this.audioCorrecto.play();
        this.alertaCorrecto();

      }


    } else {
      this.audioIncorrecto.load();
      this.audioIncorrecto.play();
      this.alertaIncorrecto();

    }

  }

  async alertaCorrecto() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/correcto.gif" />',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.next();
  }

  async alertaIncorrecto() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/incorrecto.png" />',
      duration: 1500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');

  }



}
