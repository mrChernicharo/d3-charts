import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUpdateChartComponent } from './basic-update-chart.component';

describe('BasicUpdateChartComponent', () => {
  let component: BasicUpdateChartComponent;
  let fixture: ComponentFixture<BasicUpdateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUpdateChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUpdateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
