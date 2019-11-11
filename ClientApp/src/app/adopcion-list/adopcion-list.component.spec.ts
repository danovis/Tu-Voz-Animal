import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionListComponent } from './adopcion-list.component';

describe('AdopcionListComponent', () => {
  let component: AdopcionListComponent;
  let fixture: ComponentFixture<AdopcionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopcionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
