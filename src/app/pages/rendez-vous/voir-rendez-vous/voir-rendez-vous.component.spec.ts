import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirRendezVousComponent } from './voir-rendez-vous.component';

describe('VoirRendezVousComponent', () => {
  let component: VoirRendezVousComponent;
  let fixture: ComponentFixture<VoirRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirRendezVousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
