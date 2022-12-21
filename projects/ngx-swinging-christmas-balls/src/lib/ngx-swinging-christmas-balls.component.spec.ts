import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwingingChristmasBallsComponent } from './ngx-swinging-christmas-balls.component';

describe('NgxSwingingChristmasBallsComponent', () => {
  let component: NgxSwingingChristmasBallsComponent;
  let fixture: ComponentFixture<NgxSwingingChristmasBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSwingingChristmasBallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSwingingChristmasBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
