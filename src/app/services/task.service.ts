import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //import the HttpClient and HttpHeaders
import { Observable} from 'rxjs';
import { Task } from '../Task';

//needed in order to send data to the server on a PUT request
//in this case we are sending a json object
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'; //the url of the json-server

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    //get is an observable, that's why we put the return type as Observable<Task[]>
    return this.http.get<Task[]>(this.apiUrl); //return an observable of type Task[]
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; //the url of the task to delete
    return this.http.delete<Task>(url); //return an observable of type Task
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; //the url of the task to update
    return this.http.put<Task>(url, task, httpOptions); //return an observable of type Task
  }
}
