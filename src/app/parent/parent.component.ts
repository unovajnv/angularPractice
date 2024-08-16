import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {


   class: string = 'hello this is parent class';
   dataArray: any[] = [
    {id:"01", name: "Umesh", Location: "hyedrabd"},
    {id:"02", name: "priyesh", Location: "hyedrabd"},
    {id:"03", name: "Anurag", Location: "Ahemdabad"},
    {id:"04", name: "Sachit", Location: "begnaluru"},
   ]

   updateData($event:any){
    console.log($event)
    this.dataArray = this.dataArray.filter((note)=> note.id !== $event)
   }


   updateName($event:any){
    this.dataArray.forEach((note)=> {
      if(note.id === $event.id){
        note.name = $event.name
      }
    })
   }
}
