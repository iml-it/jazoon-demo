import {Component, Output, EventEmitter} from 'angular2/core';

import {TodoService, Todo} from '../services/todos';

@Component({
  selector: 'new-todo-input',
  template: `
    <div>
      <input type="text" [(ngModel)]="newTodo.text">
      <button (click)="saveTodo()">Save</button>
    </div>
  `
})
class NewTodoInput {
  newTodo: Todo = {};
  @Output() create: EventEmitter<Todo> = new EventEmitter();

  saveTodo() {
    this.newTodo.completed = false;
    this.create.emit(this.newTodo);
    this.newTodo = {};
  }
}

@Component({
  selector: 'new-todo',
  template: `
    <h1>New Todo</h1>
    <new-todo-input (create)="addTodoToService($event)"></new-todo-input>
  `,
  directives: [NewTodoInput],
  providers: [],
  styles: []
})
export class NewTodo {

  constructor(public todoService: TodoService) {}

  addTodoToService(todo: Todo) {
    console.log(todo);
    this.todoService.addTodo(todo);
  }

}
