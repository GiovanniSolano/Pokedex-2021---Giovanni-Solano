import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  fechaHoy = new Date();
  anio: number;



  constructor() {

    this.anio = this.fechaHoy.getFullYear();

   }

  ngOnInit(): void {
  }

}
