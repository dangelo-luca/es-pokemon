import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemontypes',
  templateUrl: './pokemontypes.component.html',
  styleUrls: ['./pokemontypes.component.css']
})
export class PokemontypesComponent implements OnInit {
  
  genere: string | null = null;
  obs: Observable<any> | undefined;
  dati: any;

constructor(private route: ActivatedRoute, private http: HttpClient){}

ngOnInit(): void {
  this.route.paramMap.subscribe(this.type)
}

type = (params: ParamMap)=>{
  this.genere = params.get('genere');

  this.obs = this.http.get(`https://pokeapi.co/api/v2/type/${this.genere}`);
  this.obs.subscribe(this.prendidati);
}

prendidati=(data: any)=> {
  this.dati = data

}
}
