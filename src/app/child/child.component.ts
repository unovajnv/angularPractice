import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 @Input() data:any;
 @Output() sendToParent:any = new EventEmitter();
 @Output() toUpdate:any = new EventEmitter();
 deleteValue(id:any){
  this.sendToParent.emit(id)
  console.log(id)
 }


nameupdate(id:any)
{
  this.toUpdate.emit({id:id, name:"Vikash"})
}


}
