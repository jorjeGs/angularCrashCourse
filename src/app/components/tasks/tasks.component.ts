import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //remember to do this type of calls (http request) in the ngOnInit method
    //using as an observable
    //subscribe to the observable like if it was a promise using the .then method
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      //filter out the task that was deleted
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder; //toggle the reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    //add the task to the server
    //update the UI
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
