import { Component } from '@angular/core';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  public display:boolean;

  constructor(){
    this.display=false;
  }

  public showAlert(){
    this.display=true;
    setTimeout(()=>{
      this.display
    },2000)
  }

}
