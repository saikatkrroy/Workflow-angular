import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-task-lane-item',
  templateUrl: './task-lane-item.component.html',
  styleUrls: ['./task-lane-item.component.scss']
})
export class TaskLaneItemComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit(): void {
  }

}
