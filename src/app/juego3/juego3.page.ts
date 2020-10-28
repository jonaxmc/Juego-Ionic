import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { LoadingController, Platform ,AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Media, MediaObject } from '@ionic-native/media/ngx';


declare var $;
declare var ejemploAudio;
declare var alerta;

@Component({
  selector: 'app-juego3',
  templateUrl: './juego3.page.html',
  styleUrls: ['./juego3.page.scss'],
})
export class Juego3Page implements OnInit {

  audio: any;
  fondo: any;  

  imagen: any;
  ngOnInit() {
    
   

    this.imagen = localStorage.getItem('imagenRompe');
    $('.item').css("background-image", "url("+this.imagen+")");
    this.audio = new Audio();
    this.audio.src = '/assets/audio/correcto1.mp3';
    this.audio.load();

  }

 

  ionViewDidEnter(){
    this.fondo = new Audio();
    this.fondo.src = '/assets/audio/juego4.mp3';
    this.fondo.load();

    this.playAudio();
  }

  ionViewWillLeave(){
    this.fondo.pause();
  
  }

 

  ngAfterViewInit(){
    
    $(function(){
      $(".item").dxDraggable({
        group: "itemsGroup",
        onDragEnd: function(e) {
          
          if(e.toData === "dropArea") {
            
            let $dropArea = e.toComponent.element();
            
            if($dropArea.hasClass(e.itemElement.attr("id"))) {
              $dropArea.append(e.itemElement);
              console.log("SI");
              
              $('#'+e.itemElement.attr("id")).css("width", "140px");
              $('#'+e.itemElement.attr("id")).css("height", "140px");
              $('#'+e.itemElement.attr("id")).css("background-size", "280px 280px");
              
              
            }else{
              console.log("NO");
            }
          }
  
          if(!$(".items").children().length) {
            $(".picture").addClass("completed");
            console.log("Completado");
            ejemploAudio();
            alerta();
          }
  
          e.cancel = true;
        }
      });
    
    $(".dropArea").dxDraggable({
      
      data: "dropArea",
      group: "itemsGroup",
      onDragStart: function(e) {
        console.log("Jona3");
        e.cancel = true;
      }
    });
  });
  
}

playAudio() { 

  this.fondo.play();

  this.fondo.loop = true;
  
  
 }

 irHome() {
  this.router.navigate(["/menu"]);
 

}

atras(){
  this.router.navigate(['/menu-r']);
}
async verImagen(){
  
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    
    message: '<img src="'+this.imagen+'"/>',
    buttons: ['X']
  });

  await alert.present();
}

 

  constructor(public alertController: AlertController,public loadingCtrl: LoadingController,private dragulaService: DragulaService, public platform:Platform,private media: Media,private router: Router) {
    

    
  }

 

 

}
