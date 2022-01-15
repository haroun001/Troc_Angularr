import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'app/models/annonce.model';
import { AnnonceeService } from 'app/services/annonceService';

@Component({
  selector: 'app-deposer',
  templateUrl: './deposer.component.html',
  styleUrls: ['./deposer.component.css']
})
export class DeposerComponent implements OnInit {

  annonce: Annonce = new Annonce();
  constructor(private annonceService: AnnonceeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.annonceService.createEmployee(this.annonce).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['']);
  }

  onSubmit(){
    console.log(this.annonce);
    this.saveEmployee();
  }
}
