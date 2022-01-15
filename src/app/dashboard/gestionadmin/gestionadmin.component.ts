import { User } from './../../models/user.model';

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/services/userService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestionadmin',
  templateUrl: './gestionadmin.component.html',
  styleUrls: ['./gestionadmin.component.css']
})
export class GestionadminComponent implements OnInit {

 user: User[];

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.user = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(email: String){
    this.router.navigate(['dashboard/update',email]);
  }

  deleteEmployee(email: String){
    this.employeeService.deleteEmployee(email).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
