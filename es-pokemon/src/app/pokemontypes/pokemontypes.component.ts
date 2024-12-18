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
  typeId: string | undefined;
  obs: Observable<any> | undefined;

constructor(private route: ActivatedRoute, private http: HttpClient){}

ngOnInit(): void {
  this.route.paramMap.subscribe(this.type)
}

type = (params: ParamMap)=>{
  this.typeId = params.get('id');

  this.obs = this.http.get(`https://pokeapi.co/api/v2/type/${this.typeId}`);
  this.obs.subscribe(this.getData);
}

getData = (data: any)=>{console.log(data);
  
}
}
