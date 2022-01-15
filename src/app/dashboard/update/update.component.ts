

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/services/userService';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  email: String;
  user: User ;  
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.email = this.route.snapshot.params['email'];

    this.employeeService.getEmployeeByEmail(this.email).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }  
  
  updateEmployee(){ 
    this.employeeService.updateEmployee(this.email, this.user).subscribe( data =>{
      console.log(data);
      this.user = new User();
      this.goToEmployeeList(); 
      
    }
    , error => console.log(error));
  }
  onSubmit() {
    this.updateEmployee();    
  }
  goToEmployeeList(){
    this.router.navigate(['/dashboard/gestionadmin']);
  }
}
