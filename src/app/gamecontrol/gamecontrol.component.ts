import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  
  n:number= 0;
  @Output() NumberCreated = new EventEmitter <number> ();

  timer:any;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  start(){
  this.timer = setInterval(() => {this.n += 1; this.NumberCreated.emit(this.n)},1000);
  }
  
  stop(){
  clearInterval(this.timer);
  }


}
