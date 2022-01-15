import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'app/models/annonce.model';
import { AnnonceeService } from 'app/services/annonceService';

@Component({
  selector: 'app-gestionannonces',
  templateUrl: './gestionannonces.component.html',
  styleUrls: ['./gestionannonces.component.css']
})
export class GestionannoncesComponent implements OnInit {
  annonce: Annonce[];

  constructor(private annonceService: AnnonceeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.annonceService.getEmployeesList().subscribe(data => {
      this.annonce = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['dashboard/update-annonce',id]);
  }

  deleteEmployee(id: number){
    this.annonceService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
