import { USER_DIMON } from './constants/users-tree';
import { Component, OnInit } from '@angular/core';
import { buildEmployeesTreeFromUser } from './utils/build-employee-tree-from-user';
import { Employee } from './classes/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bridge-and-composite';

  public employee!: Employee;

  ngOnInit(): void {
    const directorDima = buildEmployeesTreeFromUser(USER_DIMON);
    this.employee = directorDima;
  }
}
