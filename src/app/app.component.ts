import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apptitle="This is comming from the app-component";

    onClick(){
    console.log("Yeeehaaaaa!");
  }
}
