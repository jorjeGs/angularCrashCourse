import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false; //default value
  private subject = new Subject<any>(); //subject is an observable that we can subscribe to and emit values
  //the difference between a subject and an observable is that a subject can emit values
  //and an observable can only subscribe to values

  constructor() { }

  //what are we gonna do is to create a method that toggles the value of showAddTask
  //and we are gonna create a method that returns an observable
  //so we can subscribe to it from any component
  

  //toggleAddTask() is a method that toggles the value of showAddTask
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask); //emit the value
  }

  //onToggle() is a method that returns an observable
  onToggle(): Observable<any> {
    return this.subject.asObservable(); //return the subject as an observable
  }
}
