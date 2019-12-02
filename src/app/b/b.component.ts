import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  nameText = "";
  
  @Output() submitfarm = new EventEmitter<any>();
  
  submitData()
  {
   console.log(this.nameText)
   this.submitfarm.emit(this.nameText);
  }

}
