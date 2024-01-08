import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../../../form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent implements OnInit,OnDestroy{
  private userSubscription:Subscription;
  
 ngOnInit(): void {
  this.userSubscription = this.myService.getUserSubject().subscribe((user) => {
    console.log("Hi");
    this.user = user;
  });
 console.log(this.user);
 }
 
  user={
    name:'',
    age:0,
    gender:'',
    description:''
  };

  public constructor(private myService: FormService) {
    this.user.name=myService.name;
    this.user.age=myService.age;
    this.user.gender=myService.gender;
    this.user.description=myService.description; 
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
