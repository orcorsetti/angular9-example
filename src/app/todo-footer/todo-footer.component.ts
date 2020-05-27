import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { TodoItem } from 'app/model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list= [];

  constructor() { }

  ngOnInit(): void {
  }

  updateCompleted() {
    return this.list.filter(item => item.isCompleted).length;
  }

  updateUncompleted() {
    return this.list.filter(item => item.isCompleted === false).length;
  }


  
}
