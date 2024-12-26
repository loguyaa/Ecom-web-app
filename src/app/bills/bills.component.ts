import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from 'express';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit{
  bills :any;
  customerId:number;
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }
  ngOnInit() {
    this.http.get("http://localhost:9999/BILLING-SERVICE/bills/search/byCustomerId?projection=FB&customerId=1"+this.customerId)
      .subscribe({
      next : (data)=>{
        this.bills=data;
      },
      error : (err)=>{}
    })
  }


}
