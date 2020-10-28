import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.page.html',
  styleUrls: ['./juego2.page.scss'],
})
export class Juego2Page implements OnInit {
  audioCorrecto: any;
  audioIncorrecto: any;
  audio1:any;
  audio2:any;
  currentIndex:Number = 0;

  rep:any;
  fondo:any;

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
    this.audioCorrecto.load();
    this.audioIncorrecto.load();
    this.audio1.load();
    this.audio2.load();
   
  }

 

  ionViewWillEnter(){
    
    
    this.slides.getActiveIndex().then((index: number) => {
      this.audio1.src = '/assets/audio/adivinanzas/preg'+index+'.mp3';
      this.audio1.play();
  });
  }

 
  ionViewDidEnter(){
    this.fondo = new Audio();
    this.fondo.src = '/assets/audio/juego3.mp3';
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




  sliders = [
    {
      pagina: 1,
      titulo: "Tengo agujas, pero no sé coser, tengo números, pero no sé leer, las horas te doy. ¿Sabes quién soy?",
      audio: '/assets/audio/adivinanzas/preg0.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/aguja.png',
          id: 1,
          correcto: 2,
        },
        {
          img: '/assets/imagenes/juego2/reloj.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/libro.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/maquinaCoser.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 2,
      titulo: "Sal al campo por las noches si me quieres conocer, soy señor de grandes ojos, cara seria y gran saber. ¿Quién soy? ",
      audio: '/assets/audio/adivinanzas/preg1.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/buho.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/luna.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/lobo.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/senior.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 3,
      titulo: "Tiene dientes y no come, tiene cabeza y no es hombre. ¿Qué es?",
      audio: '/assets/audio/adivinanzas/preg2.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/diente.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/jinete.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/leon.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/ajo.png',
          id: 4,
          correcto: 4
        }
      ]
    },
    {
      pagina: 4,
      titulo: "Canto en la orilla, vivo en el agua, no soy pescado ni soy cigarra. ¿Quién soy?",
      audio: '/assets/audio/adivinanzas/preg3.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/ballena.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/pez.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/rana.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/tiburon.png',
          id: 4,
          correcto: 3
        }
      ]
    },
    {
      pagina: 5,
      titulo: "Tengo una larga melena, soy fuerte y muy veloz, abro la boca muy grande y doy miedo con mi voz. ¿Quién soy?",
      audio: '/assets/audio/adivinanzas/preg4.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/leon.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/perro.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/koala.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/vaca.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 6,
      titulo: "Tengo hojas, soy muy alto y en mis ramas duermen los pájaros",
      audio: '/assets/audio/adivinanzas/preg5.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/arbol.png',
          id: 1,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/flor.png',
          id: 2,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/casaPajaro.png',
          id: 3,
          correcto: 1
        },
        {
          img: '/assets/imagenes/juego2/cuaderno.png',
          id: 4,
          correcto: 1
        }
      ]
    },
    {
      pagina: 7,
      titulo: "Por la tarde me escondo. Doy siempre luz y calor, y soy… redondo, redondo. ¿Quién soy?",
      audio: '/assets/audio/adivinanzas/preg6.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/estrellas.png',
          id: 1,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/sol.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/luna.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/foco.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 8,
      titulo: "As no soy, as no fui, as no seré hasta el fin. ¿Quién soy?",
      audio: '/assets/audio/adivinanzas/preg7.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/caballo.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/cebra.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/asno.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/vaca.png',
          id: 4,
          correcto: 3
        }
      ]
    },
    {
      pagina: 9,
      titulo: "Orejas largas, rabo cortito, corro y salto muy ligerito. ¿Quién soy?",
      audio: '/assets/audio/adivinanzas/preg8.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/asno.png',
          id: 1,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/conejo.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/elefante.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/perroOrejas.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 10,
      titulo: "Te la digo, te la digo, te la vuelvo a repetir, te la digo veinte veces y no me la sabes decir. ¿Qué es?",
      audio: '/assets/audio/adivinanzas/preg9.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/20.png',
          id: 1,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/niño.png',
          id: 2,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/tela.png',
          id: 3,
          correcto: 3
        },
        {
          img: '/assets/imagenes/juego2/boca.png',
          id: 4,
          correcto: 3
        }
      ]
    },
    {
      pagina: 11,
      titulo: "Todos me quieren para descansar ¡¡ Si ya te lo he dicho!! No pienses más",
      audio: '/assets/audio/adivinanzas/preg10.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/cama.png',
          id: 1,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/silla.png',
          id: 2,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/colchon.png',
          id: 3,
          correcto: 2
        },
        {
          img: '/assets/imagenes/juego2/sillon.png',
          id: 4,
          correcto: 2
        }
      ]
    },
    {
      pagina: 12,
      titulo: "En un cuarto me arrinconan sin acordarse de mi pero pronto van a buscarme cuando tienen que subir",
      audio: '/assets/audio/adivinanzas/preg11.mp3',
      imagen1: [
        {
          img: '/assets/imagenes/juego2/gradas.png',
          id: 1,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/silla.png',
          id: 2,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/subeBaja.png',
          id: 3,
          correcto: 4
        },
        {
          img: '/assets/imagenes/juego2/escalera.png',
          id: 4,
          correcto: 4
        }
      ]
    }

  ]
  

  irHome() {
   
    this.router.navigate(["/menu"]);

  }

  reproducir(sonido) {
    this.audio1.src = sonido;
    this.rep= sonido;
    this.audio1.play();
    
    
  }
  slideChanged() {
    this.slides.getActiveIndex().then((index: number) => {
      this.audio1.src = '/assets/audio/adivinanzas/preg'+index+'.mp3';
      this.audio1.load();
      this.audio1.play();
  });
}

  next() {
    this.slides.slideNext();

  }

  async presentAlert() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="assets/imagenes/niveles/felicidades.png"/><br><img src="assets/imagenes/bien.gif"/><br><ion-button color="success" href="/menu"><ion-icon name="home-sharp"></ion-icon></ion-button>'
    });
    await loading.present();
  }
    
    
  

  prev() {
    this.slides.slidePrev();
    console.log("Atras");
  }

  comprobar(id, correcto,ind) {
    if (id == correcto) {
      if(ind == 12){
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
