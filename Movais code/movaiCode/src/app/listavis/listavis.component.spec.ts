import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavisComponent } from './listavis.component';

describe('ListavisComponent', () => {
  let component: ListavisComponent;
  let fixture: ComponentFixture<ListavisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListavisComponent]
    });
    fixture = TestBed.createComponent(ListavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
