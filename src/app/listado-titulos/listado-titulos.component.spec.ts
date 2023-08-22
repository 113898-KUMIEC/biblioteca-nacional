import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTitulosComponent } from './listado-titulos.component';

describe('ListadoTitulosComponent', () => {
  let component: ListadoTitulosComponent;
  let fixture: ComponentFixture<ListadoTitulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoTitulosComponent]
    });
    fixture = TestBed.createComponent(ListadoTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
