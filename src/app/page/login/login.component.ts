import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'app/services/userService';
import { SSL_OP_ALL, SSL_OP_SINGLE_DH_USE } from 'constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : any={};
  erreur=0;
  username:String;
  pass:String; 
  errorMessage:string;
  name : string;



  constructor(private employeeserivce : EmployeeService, 
                    private router: Router) { }

  ngOnInit(): void {
    this.employeeserivce.islogin = false;
   this.employeeserivce.admin = false;
   this.employeeserivce.suser = false;

  }

  onlogin() {
  
    this.employeeserivce.Login(this.username).subscribe(
      response =>{this.user = response;
      
       if (this.user.password == this.pass)
       {
        this.name = this.user.nom;
        localStorage.setItem('name', this.name);
         this.employeeserivce.islogin = true;
        if (this.user.fonction  == "admin")
         {
          this.employeeserivce.admin = true;
        this.router.navigate(['/dashboard']);
     
     
      }
      else if (this.user.fonction  == "troqueur") {
        this.employeeserivce.suser = true;
        this.router.navigate(['/dashboard/table']);
        
        
      }
      else 
      {
        this.router.navigate(['/visiteur/profile']);
      }
           
       }
              else
              {
                console.log("yess")
               }

          },
          error => 
          
          console.log("noo")
         
          
          );
     
   
        
    
    }
    
    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('name');
      
  }
}
