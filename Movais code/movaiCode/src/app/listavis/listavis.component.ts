import { Component, OnInit } from '@angular/core';
import { myservice } from '../services/service.service';
import { Router } from '@angular/router';
import { msg } from '../model/Message';
import { avi } from '../model/avis';

@Component({
  selector: 'app-listavis',
  templateUrl: './listavis.component.html',
  styleUrls: ['./listavis.component.css']
})
export class ListavisComponent  implements OnInit {

  constructor(private myser:myservice,private route :Router,) { }
  list!: avi[] ;
  tot:number =0

  get()
  {
    this.myser.getavis().subscribe(d=>{
      console.log(d)
      this.list = d.msg;
this.tot=this.list.length
    })
  }
  

  ngOnInit(): void {
  this.get();
  }

}
