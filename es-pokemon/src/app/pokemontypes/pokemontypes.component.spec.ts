import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemontypesComponent } from './pokemontypes.component';

describe('PokemontypesComponent', () => {
  let component: PokemontypesComponent;
  let fixture: ComponentFixture<PokemontypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemontypesComponent]
    });
    fixture = TestBed.createComponent(PokemontypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
