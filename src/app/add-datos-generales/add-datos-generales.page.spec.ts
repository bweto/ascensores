import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatosGeneralesPage } from './add-datos-generales.page';

describe('AddDatosGeneralesPage', () => {
  let component: AddDatosGeneralesPage;
  let fixture: ComponentFixture<AddDatosGeneralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDatosGeneralesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatosGeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
