import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the home page";
  myString = "I like red";
  myBoolean = false;

  alertMe(val){
    alert(val);
  }

  @Input()  dict;


  fireYellEvent(e){
    this.onYell.emit(e);
  }

  @Output() onYell = new EventEmitter();

  obj = {
    name: "Yoshi",
    belt: "Black"
  };

  constructor() { }

  ngOnInit() {
  }

}
