import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  constructor(private alertController:AlertController, private router:Router,) { }

  ngOnInit() {
  }
  user : String = "";
  pass : String = "";
 

  async showErrorv(){
    const alerta =await this.alertController.create({
      header : 'Error',
      message: 'Los campos no pueden estar vacios',
      buttons: ['Ok'],
    })
    await alerta.present();
  }


  enviar(){
    if(this.user  == "" && this.pass == ""){
      this.showErrorv();


    }else{
      let user : NavigationExtras = {
        queryParams:{user: this.user}
      }
      this.router.navigate(['/home'], user);
    }
  }


  recuperarC(){
    this.router.navigateByUrl('/recuperar-c')
  }
}

