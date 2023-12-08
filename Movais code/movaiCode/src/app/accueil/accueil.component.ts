// accueil.component.ts
import { Component } from '@angular/core';
import { myservice } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent  {
  chaine: any;
  isVideo1Visible: any = "false";
  isVideo2Visible: any = "false";

  constructor(private myser: myservice, private route: Router) { }

  
  check1() {
    this.myser.changestate().subscribe(d=>{
     // console.log(d)
      this.isVideo1Visible = d.value;
    });

  }

  check2() {
    this.myser.changestate().subscribe(d=>{
      this.isVideo2Visible = d.value;
    });

  }
}
