import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiziarioComponent } from './notiziario.component';

describe('NotiziarioComponent', () => {
  let component: NotiziarioComponent;
  let fixture: ComponentFixture<NotiziarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiziarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiziarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
