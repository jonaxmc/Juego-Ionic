import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-r',
  templateUrl: './menu-r.page.html',
  styleUrls: ['./menu-r.page.scss'],
})
export class MenuRPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

 
  irHome() {
    this.router.navigate(["/menu"]);
   
  
  }

  imagenes = [
    {
      img: '/assets/imagenes/rompe/bob.jpg'
    },
    {
      img: '/assets/imagenes/rompe/pepa.jpg'
    },
    {
      img: '/assets/imagenes/rompe/pitufo.jpg'
    },
    {
      img: '/assets/imagenes/rompe/shrek.jpg'
    }
  ]

  elegirImagen(src){
    localStorage.setItem('imagenRompe', src);
    this.router.navigate(["/juego3"]);
    
  }

}
