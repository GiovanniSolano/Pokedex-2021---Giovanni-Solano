import { Component, OnInit, Input } from '@angular/core';
import { Stat, Stats } from '../../models/pokemon.model';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() stat: Stats;
  constructor() { }

  ngOnInit(): void {

    
    
  }

}
