import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from 'app/models/annonce.model';
import { AnnonceeService } from 'app/services/annonceService';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {

  id: number;
  annonce: Annonce ;  
  constructor(private annonceService: AnnonceeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.annonce = new Annonce();
    this.id = this.route.snapshot.params['id'];

    this.annonceService.getEmployeeById(this.id).subscribe(data => {
      this.annonce = data;
    }, error => console.log(error));
  }  
  
  updateEmployee(){ 
    this.annonceService.updateEmployee(this.id, this.annonce).subscribe( data =>{
      console.log(data);
      this.annonce = new Annonce();
      this.goToEmployeeList(); 
      
    }
    , error => console.log(error));
  }
  onSubmit() {
    this.updateEmployee();    
  }
  goToEmployeeList(){
    this.router.navigate(['/dashboard/gestionannonces']);
  }
}