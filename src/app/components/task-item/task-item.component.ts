import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() toggleStatus: EventEmitter<Task> = new EventEmitter();
  @Output() deleteButton: EventEmitter<Task> = new EventEmitter();
  item = document.querySelectorAll('#task-item');
  constructor() { }

  ngOnInit(): void {

  }

  changeStatus(task: Task): void {
    this.toggleStatus.emit(task);
  }

  deleteTask(task: Task){
    this.deleteButton.emit();
  }

}

