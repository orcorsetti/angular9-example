import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter();

  focus= false;

  onClickedAdd(description){
    const value = description.value.trim();
    if(value){
      this.add.emit(description.value);
      description.value='';
    } else {
      alert("Ingrese una descripcion para la tarea")
    }
  }

  ngOnInit(): void {
  }

}
