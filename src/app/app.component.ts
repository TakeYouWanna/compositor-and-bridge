import { UserPossibilities } from './models/user-possibilities.model';
import { AngularEmployeePossibilities } from './classes/angular-employee-possibilieies';
import { USER_DIMON } from './constants/users-tree';
import { Component, OnInit } from '@angular/core';
import { buildEmployee } from './utils/build-employee-tree';
import { Employee } from './classes/employee';
import { buildEmployeeWithPossibilities } from './utils/build-employee-with-possibilities-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bridge-and-composite';

  public employee!: Employee;

  ngOnInit(): void {
    const angularEmployeePossibilities = new AngularEmployeePossibilities();
    const directorDima = buildEmployeeWithPossibilities(
      USER_DIMON,
      angularEmployeePossibilities
    );
    this.employee = directorDima;
  }
}
