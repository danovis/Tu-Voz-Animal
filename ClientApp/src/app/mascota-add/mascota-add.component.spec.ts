import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAddComponent } from './mascota-add.component';

describe('MascotaAddComponent', () => {
  let component: MascotaAddComponent;
  let fixture: ComponentFixture<MascotaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
