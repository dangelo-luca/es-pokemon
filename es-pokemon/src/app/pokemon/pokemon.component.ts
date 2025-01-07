import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
    
    pokemon: string | null = null;
    obs: Observable<any> | undefined;
    dati: any = {};
  
  constructor(private route: ActivatedRoute, private http: HttpClient){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(this.type)
  }
  
  type = (params: ParamMap)=>{
    this.pokemon = params.get('pokemon');
  
    this.obs = this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}`);
    this.obs.subscribe(this.prendidati);
  }
  
  prendidati = (data: any) => {
    console.log(data); // Controlla i dati ricevuti
      this.dati = data; // Dettagli di un singolo Pokémon
  };
}
