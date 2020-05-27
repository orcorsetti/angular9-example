import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'app/model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list =[];
  @Output() itemStateChanged = new EventEmitter<TodoItem>();
  @Output() itemRemoved = new EventEmitter<TodoItem>();
  @Output() itemEdited = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckedBox(item: TodoItem) {
    this.itemStateChanged.emit(item);
  }

  onDeleteButtonClicked(item: TodoItem) {
    this.itemRemoved.emit(item);
  }

}
