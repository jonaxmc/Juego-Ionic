import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego5',
  templateUrl: './juego5.page.html',
  styleUrls: ['./juego5.page.scss'],
})
export class Juego5Page implements OnInit {

  audioCorrecto: any;
  audioIncorrecto: any;
  audio1:any;
  audio2:any;
  currentIndex:Number = 0;

  indice: any;
  fondo:any;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  

  constructor(public loadingCtrl: LoadingController, private router: Router,public alertController: AlertController) { }

  ngOnInit() {
    this.audioCorrecto = new Audio();
    this.audioCorrecto.src = '/assets/audio/bien.mp3';
    this.audioIncorrecto = new Audio();
    this.audioIncorrecto.src = '/assets/audio/mal.mp3';
    this.audio1 = new Audio();
    this.audio2 = new Audio();
    this.audio2.src = '/assets/audio/correcto1.mp3';
   
  }

 

  ionViewWillEnter(){
    
    
    this.slides.getActiveIndex().then((index: number) => {
      this.indice=index;
      this.audio1.src = '/assets/audio/juego5-'+index+'.mp3';
      
  });

  this.alertaNivel1();
  //this.audio1.play();
  }

  ionViewDidEnter(){
    this.fondo = new Audio();
    this.fondo.src = '/assets/audio/juego2.mp3';
    this.fondo.load();

    this.playAudio();
  }

  ionViewWillLeave(){
    this.fondo.pause();
    this.audio1.pause();
  }

  
  playAudio() { 
    this.fondo.play();
    this.fondo.loop = true;
    
    
   }

  async presentAlert() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/niveles/felicidades.png"/><br><img src="assets/imagenes/bien.gif"/><br><ion-button color="success" href="/menu"><ion-icon name="home-sharp"></ion-icon></ion-button>',
      
    });

    await loading.present();
    
  }



  sliders = [
    {
      pagina: 1,
      titulo: "¿Quién vive aquí?",
      imagen:"/assets/imagenes/juego5/1/polo.png",
      audio: '/assets/audio/juego5-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/pajaro.png',
          id: 1,
          correcto: 2,
        },
        {
          img: '/assets/imagenes/juego5/1/pinguino.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/pez.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/perro.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 2,
      titulo: "¿Quién vive aquí?",
      imagen:"/assets/imagenes/juego5/1/panal.png",
      audio: '/assets/audio/juego5-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/jirafa.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/leon.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/conejo.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego5/1/abeja.png',
          id: 4,
          correcto: 4
        }
      ]
    },
    {
      pagina: 3,
      titulo: "¿Quién vive aquí?",
      audio: '/assets/audio/juego5-0.mp3',
      imagen:"/assets/imagenes/juego5/1/desierto.png",
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/cerdo.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/buho.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego5/1/hipo.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego5/1/camello.png',
          id: 4,
          correcto: 4
        }
      ]
    },
    {
      pagina: 4,
      titulo: "¿Quién vive aquí?",
      imagen:"/assets/imagenes/juego5/1/jungla.png",
      audio: '/assets/audio/juego5-0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/mono.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego5/1/caballito.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego5/1/pinguino.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego5/1/foca.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 5,
      titulo: "¿De quién es la silueta?",
      imagen:"/assets/imagenes/juego5/siluetas/ballena.png",
      audio: '/assets/audio/juego5-1.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/leon.png',
          id: 1,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/ballena.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/koala.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/tiburon.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 6,
      titulo: "¿De quién es la silueta?",
      imagen:"/assets/imagenes/juego5/siluetas/gato.png",
      audio: '/assets/audio/juego5-1.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/perro.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego5/1/hipo.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/vaca.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego5/1/gato.png',
          id: 4,
          correcto: 4
        }
      ]
    },
    {
      pagina: 7,
      titulo: "¿De quién es la silueta?",
      imagen:"/assets/imagenes/juego5/siluetas/oveja.png",
      audio: '/assets/audio/juego5-1.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/vaca.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego5/1/cerdo.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego5/1/oveja.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/caballo.png',
          id: 4,
          correcto: 3
        }
      ]
    },
    {
      pagina: 8,
      titulo: "¿De quién es la silueta?",
      imagen:"/assets/imagenes/juego5/siluetas/tucan.png",
      audio: '/assets/audio/juego5-1.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/tucan.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/cebra.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego5/1/gato.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego5/1/jirafa.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 9,
      titulo: "¿A quién le pertenece esta parte?",
      imagen:"/assets/imagenes/juego5/partes/tucan.png",
      audio: '/assets/audio/juego5-2.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/pajaro.png',
          id: 1,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego5/1/tucan.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego5/1/loro.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego5/1/pinguino.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 10,
      titulo: "¿A quién le pertenece esta parte?",
      audio: '/assets/audio/juego5-2.mp3',
      imagen:"/assets/imagenes/juego5/partes/cerdo.png",
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/cerdo.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/asno.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/vaca.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/caballo.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 11,
      titulo: "¿A quién le pertenece esta parte?",
      audio: '/assets/audio/juego5-2.mp3',
      imagen:"/assets/imagenes/juego5/partes/mono.png",
      imagen1: [
        {
          img: '/assets/imagenes/juego2/cebra.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/conejo.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/caballo.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego5/1/mono.png',
          id: 4,
          correcto: 4
        }
      ]
    },
    {
      pagina: 12,
      titulo: "¿A quién le pertenece esta parte?",
      audio: '/assets/audio/juego5-2.mp3',
      imagen:"/assets/imagenes/juego5/partes/piquero.png",
      imagen1: [
        {
          img: '/assets/imagenes/juego5/1/fla.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego5/1/pajaro.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego5/1/piquero.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego5/1/gallo.png',
          id: 4,
          correcto: 3
        }
      ]
    }

  ]
  

  irHome() {
    this.router.navigate(["/menu"]);
    console.log("OK");

  }

  reproducir(sonido) {
    this.audio1.src = sonido;
    console.log(this.audio1);
    this.audio1.play();
    
  }
  slideChanged() {
    this.slides.getActiveIndex().then((index: number) => {
      if(index == 0 || index == 1 || index == 2 || index == 3){
        this.audio1.src = '/assets/audio/juego5-0.mp3';
        this.audio1.play();
      }
      if(index == 4 || index == 5 || index == 6 || index == 7){
        this.audio1.src = '/assets/audio/juego5-1.mp3';
        this.audio1.play();
      }
      if(index == 8 || index == 9 || index == 10 || index == 11){
        this.audio1.src = '/assets/audio/juego5-2.mp3';
        this.audio1.play();
      }

      
      
  });
}

  next() {
    this.slides.slideNext();
    
    
  }



  prev() {
    this.slides.slidePrev();
    console.log("Atras");
  }

  comprobar(id, correcto, ind) {
    if (id == correcto) {
      if(ind == 4 || ind == 8 || ind == 12){
        if(ind ==4){
          this.audioCorrecto.load();
          this.audioCorrecto.play();
          this.alertaNivel2();
        }
        if(ind == 8){
          this.audioCorrecto.load();
          this.audioCorrecto.play();
          this.alertaNivel3();
        }
        if(ind == 12){
          this.audio2.load();
          this.audio2.play();
          this.presentAlert();
        }
        
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

  async alertaNivel1() {
    this.audioCorrecto.play();
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/niveles/nivel1.png" />',
      duration: 2500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.audio1.play();
    
  }

  async alertaNivel2() {
    
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/niveles/nivel2.png" />',
      duration: 2500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.next();
  }

  async alertaNivel3() {
    
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/niveles/nivel3.png" />',
      duration: 2500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.next();
    
    
  }

}
