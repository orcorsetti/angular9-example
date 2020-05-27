import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  list=[];
  lastItemId = 0;
  constructor() { }
  currentItem: TodoItem;

  ngOnInit(): void {
  }
  
  onTodoItemCreated(event) {
    this.currentItem = new TodoItem();
    this.currentItem.description= event;
    this.currentItem.id= this.lastItemId + 1;
    this.currentItem.isCompleted= false;
    this.list.push(this.currentItem);
    this.lastItemId+=1;
  }

  onItemStateChanged(item: TodoItem) {
    item.toggleCompleted();
  }

  onTodoItemRemoved(item: TodoItem) {
    const id = this.list.indexOf(item)
    this.list.splice(id, 1);
  }

}
