import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import {Router} from '@angular/router';
import {ServiceService} from '../service.service' ; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users=[];
  users2=[];
  u:any;
  constructor(
    private servis : ServiceService ,
    private router: Router,
    private http: HttpClient) 
    {}

  ngOnInit(){

   this.http.get("https://localhost:44396/yusuf").subscribe((res: any) =>{
      console.log("gelen data home page");
      console.log(res); 
      this.users2=res;   
      });
     /* this.http.get("https://mobil2.aski.gov.tr/service/hava_durumu_yahoo").subscribe((res: any) =>{
        console.log("gelen data");
        console.log(res);
        this.users=res.liste;
        
    });*/
  }
  islem(tarih){
    this.u=tarih;
    console.log("giden navdata",this.u);
    this.servis.setNavData(this.u);
    this.router.navigate(['/second-page']);
  }
}
