import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }


  pageLogin(){
    this.router.navigateByUrl('/iniciar-sesion')
  }
  pageRegistrarr(){
    this.router.navigateByUrl('/registrar')

  }


  

  
  
}
