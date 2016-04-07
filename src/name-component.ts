import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'name',
  template: `
    <div>My name is {{value}}</div>
    <button (click)="changeName()">Change</button>
  `
})
export class NameComponent {
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  changeName() {
    this.valueChange.emit(this.value + '!!!!!!!!')
  }
}
