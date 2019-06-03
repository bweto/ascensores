import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertaPage } from './puerta.page';

describe('PuertaPage', () => {
  let component: PuertaPage;
  let fixture: ComponentFixture<PuertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuertaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
