import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor() { }

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
