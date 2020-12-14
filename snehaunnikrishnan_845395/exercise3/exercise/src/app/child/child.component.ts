import { Component, Input, OnInit, Output } from '@angular/core';

import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input()
  
  username : String = "";

counter1 : number = 1;
counter2 : number = 1;
  
@Output()
LikeCounter : EventEmitter<number> = new EventEmitter<number>();

@Output()
DislikeCounter : EventEmitter<number> = new EventEmitter<number>();

likeClick(){
  this.LikeCounter.emit(this.counter1++);
}
dislikeClick(){
  this.DislikeCounter.emit(this.counter2++);
}
clearClick(){
  this.LikeCounter.emit(this.counter1 = 0);
  this.DislikeCounter.emit(this.counter2=0);
}

}
