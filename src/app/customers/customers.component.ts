import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers :any;
  constructor(private http: HttpClient,private router: Router) {
  }
  ngOnInit() {
    this.http.get("http://localhost:9999/CUSTOMER-SERVICES/customers").subscribe({
      next : (data)=>{
        this.customers=data;
      },
      error : (err)=>{}
    })
  }


  getBills(c: any) {
    this.router.navigateByUrl("/bills/"+c.id);
  }
}
