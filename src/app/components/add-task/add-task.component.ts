import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  day!: string;
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private ui: UiService) {
    //we are subscribing to the observable that is returned from the onToggle() method
    //and we are setting the value of showAddTask to the value that is returned from the observable
    this.subscription = this.ui
      .onToggle()
      .subscribe((value) => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    //event an event
    this.onAddTask.emit(newTask);

    //clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
