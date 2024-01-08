import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent implements OnInit{

  ngOnInit(): void {
    this.user.name=this.myService?.name;
    this.user.age=this.myService?.age;
    this.user.gender=this.myService?.gender;
    this.user.description=this.myService?.description;  
  //  this.user=this.myService.existing;
  }

  user={
    name:'',
    age:'',
    gender:'',
    description:''
  };

  public constructor(private myService: FormService) {
    
  }
}