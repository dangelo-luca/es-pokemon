import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-genere',
  templateUrl: './genere.component.html',
  styleUrls: ['./genere.component.css']
})
export class GenereComponent {
    obs: Observable<any>;
    mieidati: any;
  
    constructor(private http : HttpClient)
    {
      this.obs = this.http.get<any>("https://pokeapi.co/api/v2/type");
      this.obs.subscribe(this.prendidati)
    }
    prendidati=(data: any)=> {
      this.mieidati = data
    }
}
