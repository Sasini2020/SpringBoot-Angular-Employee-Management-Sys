import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { faEdit, faTrashAlt, faListUl} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faListUl = faListUl;

  employees: Employee[] = [];

  constructor(private employService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  
  private getEmployees(){
    this.employService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
}
