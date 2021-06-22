import { Component, OnInit,Injectable,Input  } from '@angular/core';
import { ngDraggable } from 'ngDraggable';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-lane',
  templateUrl: './task-lane.component.html',
  styleUrls: ['./task-lane.component.scss']
})
@Injectable()
export class TaskLaneComponent implements OnInit {
@Input() items;
@Input() title;
@Input() id;
itemCount;
draggable = true;
  constructor() { }

  ngOnInit() {
    this.itemCount=this.itemCountfun();
  }
  itemCountfun() {
    if (!this.items) return '0 tasks';
    if (this.items.length === 1) return '1 task';
    return `${this.items.length} tasks`;
  }
  onDragStart(){
    console.log("Item Dragging");
  }
  onDropComplete(){
    console.log("Item Dropped");
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log("Item Dropped");

  }
}
