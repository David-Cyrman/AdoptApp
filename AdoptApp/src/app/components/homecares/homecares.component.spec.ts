import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecaresComponent } from './homecares.component';

describe('HomecaresComponent', () => {
  let component: HomecaresComponent;
  let fixture: ComponentFixture<HomecaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
