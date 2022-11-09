import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  constructor() { }

  public onClickButtonOne(): void {
    alert("Button 1 is Working...............");
  }

  public onClickButtonTwo(): void {
    alert("Button 2 is Working...............");
  }

}
