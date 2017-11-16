import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /* This view gets dumped in index.html */
  //template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app whoo';
  name = 'Hi'
  dict={
    prop1: "value1",
    prop2: "value2"
  };

  yell(e){
    alert('Am yelling');
  }
}
