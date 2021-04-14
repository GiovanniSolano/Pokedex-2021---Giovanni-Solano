import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo = '';
  tituloSubs$: Subscription;

  constructor(private router: Router,) {



    this.tituloSubs$ = this.getArgumentosRuta()

    .subscribe(({titulo}) => {       
                   
                 
      this.titulo = titulo;
      document.title = `Pokédex - ${titulo}`;
    });

   }

  ngOnInit(): void {
  }


  getArgumentosRuta() {
    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
      );
    
  }

}
