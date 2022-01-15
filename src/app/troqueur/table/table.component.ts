
import { Annonce } from 'app/models/annonce.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Annonce;
  constructor(private httpClient:HttpClient) {}

  ngOnInit() :void {
    this.httpClient.get('http://localhost:8484/Troc/rest/article')
   .subscribe((data)=>{

        this.Annonce=data


      }
    );
  }


}
