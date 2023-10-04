import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: any;
  @Input() i: any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todo> = new EventEmitter();

  onclick(todo: Todo) {
    this.todoDelete.emit(todo);
  }
  oncheckboxclick(todo: Todo) {
    this.todocheckbox.emit(todo);
    console.log(todo)
  }
}
