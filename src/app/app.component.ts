import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  x: string ="Please enter name";
  name: string ;
  execute(){
    this.x = this.name;

  }
}
