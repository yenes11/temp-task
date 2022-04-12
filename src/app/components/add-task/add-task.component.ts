import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const task = {
      id : Math.floor(Math.random() * 9000000000),
      text: this.text,
      status: false
    }

    this.onAddTask.emit(task);

    this.text = '';
  }

}
