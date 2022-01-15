import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { EmployeeService } from 'app/services/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.islogin = false;
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.user).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList;
      
    },
    error => console.log(error));
  }
  

  goToEmployeeList(){
    this.router.navigate(['']);
  }
  onSubmit(){
    console.log(this.user);
    this.saveEmployee();
    
   

  }
  
}
