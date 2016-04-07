import {Component} from 'angular2/core';
import {NameComponent} from './name-component';
import {FriendService} from './friends';

@Component({
  selector: 'jazoon-app',
  template: `
    <h1>yipeeh {{name}}</h1>
    <button [disabled]="isDisabled" (click)="changeName()">change name</button>
    <ul>
      <li *ngFor="#friend of friends">{{friend}}</li>
    </ul>
    <input [(ngModel)]="name">
    <name [(value)]="name"></name>
  `,
  directives: [NameComponent],
  providers: [FriendService]
})
export class App {

  name: string;
  isDisabled: boolean = false;
  friends: string[];

  constructor(friendService: FriendService) {
    this.name = 'Zap Brannigan';
    this.friends = friendService.list;
  }

  changeName() {
    this.name = 'Jack the Rapper';
  }

  // valueChanged(name: string) {
  //   this.name = name;
  // }

}
