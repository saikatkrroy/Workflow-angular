import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  state={
    items : {
    todo:[],
    inProgress: [],
    done: [],
  },
  nextId: 1,
 };



  constructor(
    private http: HttpClient
  ) {}

  addItem(item) {
    this.state.items.todo.push(Object.assign(item, { id: this.state.nextId }));
    this.state.nextId += 1;
    //console.log(this.getItems());
  }

  getTodoItems() {
    return this.state.items.todo;
  }
  getInProgressItems(){
    return this.state.items.inProgress;
  }
  getDoneItems(){
    return this.state.items.done;
  }
  clearCart() {
    this.state.items.todo = [];
    return this.state.items;
  }
  
}
