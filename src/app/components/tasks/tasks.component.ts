import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task));
  }

  changeStatus(task: Task) {
    this.taskService
  }

}
