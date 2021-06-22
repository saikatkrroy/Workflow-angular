import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLaneItemComponent } from './task-lane-item.component';

describe('TaskLaneItemComponent', () => {
  let component: TaskLaneItemComponent;
  let fixture: ComponentFixture<TaskLaneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskLaneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLaneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
