import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedBarTableComponent } from './grouped-bar-table.component';

describe('GroupedBarTableComponent', () => {
  let component: GroupedBarTableComponent;
  let fixture: ComponentFixture<GroupedBarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedBarTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedBarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
