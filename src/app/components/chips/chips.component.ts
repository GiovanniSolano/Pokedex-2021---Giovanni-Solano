import { Component, Input, OnInit } from '@angular/core';
import { Types } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  @Input() tipo: Types;


 
  constructor() { 



  }


  ngOnInit(): void {
  

  }

  // Angular Material colors: basic, primary, accent, warn

  cambiarColor(nombre: string): string {
    if(nombre) {
      switch (nombre) {
        case 'flying':
          return 'basic';
        case 'fire':
          return 'warn'; 
        case 'grass':
          return 'accent';
        default:
        return 'primary'
      }
    }

  }

}
