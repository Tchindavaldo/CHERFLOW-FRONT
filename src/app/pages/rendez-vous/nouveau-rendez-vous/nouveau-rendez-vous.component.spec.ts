import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauRendezVousComponent } from './nouveau-rendez-vous.component';

describe('NouveauRendezVousComponent', () => {
  let component: NouveauRendezVousComponent;
  let fixture: ComponentFixture<NouveauRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauRendezVousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
