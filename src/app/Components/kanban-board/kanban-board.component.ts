import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from '../../Services/item-service.service';
import { ngDraggable } from 'ngDraggable';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  todoItems;
  inProgressItems;
  doneItems;
  constructor( private itemService:ItemServiceService) { }

  ngOnInit() {
    this.todoItems=this.itemService.getTodoItems();
    this.inProgressItems=this.itemService.getInProgressItems();
    this.doneItems=this.itemService.getDoneItems();
  }
  onDropComplete(){
    console.log("Item Dropped");
  }
}
