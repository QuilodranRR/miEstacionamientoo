import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.page.html',
  styleUrls: ['./slash.page.scss'],
})
export class SlashPage implements OnInit {

  constructor(private router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('login')
    },1500)
   }

  ngOnInit() {
   

}
}