import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitacionesComponent } from './habitaciones.component';

describe('HabitacionesComponent', () => {
  let component: HabitacionesComponent;
  let fixture: ComponentFixture<HabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have habitaciones', () => {
    expect(component.habitaciones.length).toBeGreaterThan(0);
  });

  it('should have caracteristicas', () => {
    expect(component.caracteristicas.length).toBeGreaterThan(0);
  });
});