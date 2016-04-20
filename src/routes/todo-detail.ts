import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {TodoService, Todo} from '../services/todos';

@Component({
  selector: 'todo-detail',
  template: `
    <h1>Details</h1>
    {{todo.text}}
  `,
  directives: [],
  providers: [],
  styles: []
})
export class TodoDetail {

  todo: Todo;

  constructor(public todoService: TodoService,
    public routeParams: RouteParams) {
    this.todo = todoService.findById(parseInt(routeParams.get('id')));
  }

}
