import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  
  people=[{
    name:"Samarth" 
    ,age:28},
    {name:"Bob",
    age:34},
    {name:"Alice"
    ,age:27
  }];
  name:String ="";
  age: number;
  
 
  update(name,age){
   this.people.push({"name":name,
                "age":age});

  
  this.name ="";
  this.age= undefined;
  }
 
}
