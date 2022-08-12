import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:3004/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateReminderTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task);
  }
}
