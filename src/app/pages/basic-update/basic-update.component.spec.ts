import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUpdateComponent } from './basic-update.component';

describe('BasicUpdateComponent', () => {
  let component: BasicUpdateComponent;
  let fixture: ComponentFixture<BasicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
