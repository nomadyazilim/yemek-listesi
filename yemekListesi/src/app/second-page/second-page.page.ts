import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import {ServiceService} from '../service.service' ; 
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  users2=[];
  data:any;
  constructor(private http: HttpClient,private servis : ServiceService ) { }

  ngOnInit() {
    
    this.data=this.servis.getNavData();
    console.log("gelen data get nav data");
    console.log(this.data);


   this.http.get("https://localhost:44396/yusuf").subscribe((res: any) =>{

    console.log("gelen data second page");
    console.log(res); 
    this.users2=res;   
    });
  }

}
