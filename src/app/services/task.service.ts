import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //import the HttpClient and HttpHeaders
import { Observable} from 'rxjs';
import { Task } from '../Task';

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
}
