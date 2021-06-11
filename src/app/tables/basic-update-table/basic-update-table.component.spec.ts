import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUpdateTableComponent } from './basic-update-table.component';

describe('BasicUpdateTableComponent', () => {
  let component: BasicUpdateTableComponent;
  let fixture: ComponentFixture<BasicUpdateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUpdateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUpdateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
