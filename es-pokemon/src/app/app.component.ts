import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es-pokemon';
  obs: Observable<any>;
  mieidati: any;

  constructor(private http : HttpClient)
  {
    this.obs = this.http.get<any>("https://pokeapi.co/api/v2/type/normal");
    this.obs.subscribe(this.prendidati)
  }
  prendidati=(data: any)=> {
    this.mieidati = data
  }

}
