import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  term:string = "";
  topics = [
    {type:"Fiction", name:"Avatar"},
    {type:"NonFiction", name:"Titanic"},
    {type:"Tragedy", name:"MotherIndia"},
  ];
  constructor() { }

  ngOnInit() {
  }
}
