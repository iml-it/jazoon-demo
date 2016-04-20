export interface Todo {
  id?: number;
  text?: string;
  completed?: boolean;
}

let currentTodoId: number = 1;

export class TodoService {
  todos: Todo[] = [];

  addTodo(newTodo: Todo) {
    newTodo.id = currentTodoId;
    currentTodoId = currentTodoId + 1;
    this.todos = this.todos.concat([newTodo]);
  }

  findById(id: number) {
    return this.todos.find(todo => todo.id === id);
  }
}
