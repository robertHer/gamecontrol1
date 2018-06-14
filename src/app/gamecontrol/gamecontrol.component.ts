import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  
  number:number = 0;
  @Output() numberCreated = new EventEmitter<number>()
  timer:any;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  start(){
  this.timer = setInterval(() => {this.number += 1; this.numberCreated.emit(this.number)},1000);
  }
  
  stop(){
  clearInterval(this.timer);
  }


}
