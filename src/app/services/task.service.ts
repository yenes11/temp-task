import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../task';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.url, task, httpOptions);
  }

  changeStatus(task: Task): Observable<Task> {
    task.status = !task.status;
    return this.http.put<Task>(`${this.url}/${task.id}`, task, httpOptions);
  }

  deleteTask(task: Task) {
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }
}
