import { Injectable, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { formModel } from "./models/form.model";

@Injectable({providedIn:'root'})
export class FormService{

  private formUser=new Subject<formModel|null>();
  
  constructor(){

  }
  names=['Unnati','Vanshita','Abhay','Avantika'];
  values=localStorage.getItem('user');
  exist=this.values?JSON.parse(this.values):{};
  existing=this.exist[this.exist.length-1];

 
  name=this.existing?.name;
  age=this.existing?.age;
  gender=this.existing?.gender;
  description=this.existing?.description;

  user={
    name:this.name,
    age:this.age,
    gender:this.gender,
    description:this.description
  };
   setUser(user: formModel) {
    this.formUser.next(user);
  }
  
  getUserSubject() {
    return this.formUser;
  }
}