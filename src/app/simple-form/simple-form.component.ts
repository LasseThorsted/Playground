import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  simplename="This is comming from the simple-form-component";

  constructor() { }

  ngOnInit() {
  }

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }

  onHover(){
    console.log("You hoverd on the inputfield!")
  }

}
