import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  name = ' Aarkay';
  nameText1:any='';
  showTextmsg(name: any) {
    this.nameText1 =name;
  }

}
