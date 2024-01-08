import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../form.service';
import { formModel } from '../../../models/form.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../../app/api.service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})

export class FirstComponent implements OnInit{  
  values:string;
  save=false;
  fetch=false;
  normal=true;
  above=false;

  ngOnInit(): void {
    this.values=window.localStorage.getItem("user");
    this.users = JSON.parse(this.values) || [];
  }

    public constructor(private myService:FormService,
      private route:Router,
      private router:ActivatedRoute,
      private apiService:ApiServiceService)
      {
    this.users=myService?.exist;
   }
   users:formModel[]=[];
   onDelete(){
    localStorage.clear();
    this.users?.splice(0,this.users.length);
   }
   onEdit()
   {
     this.route.navigate(['/A/1'],{relativeTo:this.router});
   }

   onSave()
   {
    if(this.users.length>0){
    this.save=true;
    this.normal=false;
    this.apiService.postDataToServer(this.users).subscribe(
      (response) => {
        console.log('Data saved successfully on the server:', response);
        localStorage.clear();
        this.users = [];
        this.fetchData();
      },
      (error) => {
        console.error('Error saving data on the server:', error);
      }
    );
   }
   else{
    this.save=false;
    this.normal=false;
    this.fetchData();
   }
  }
  fetchData(){
    this.apiService.getDataFromServer().subscribe((data)=>{
      this.users=[];
      this.fetch=true;
      this.normal=false;
      data.forEach(element => {
        if( element.data[0].age>40){
        this.users.push(element.data);
        this.above=true;
        }
       }
       )
    },(error)=>{
      console.error("Error fetching data from server");
      }
     );
    }
  }
 

