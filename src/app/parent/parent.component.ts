import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataServiceService } from '../service/data-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  constructor(private httpService: HttpService, private router: Router, private titleService: Title,private dataService:DataServiceService,) { }

  //  class: string = 'hello this is parent class';
  //  dataArray: any[] = [
  //   {id:"01", name: "Umesh", Location: "hyedrabd"},
  //   {id:"02", name: "priyesh", Location: "hyedrabd"},
  //   {id:"03", name: "Anurag", Location: "Ahemdabad"},
  //   {id:"04", name: "Sachit", Location: "begnaluru"},
  //  ]

  dataArray: any[] = [];
   ngOnInit():void {
      
    this.httpService.getAllNotes().subscribe({
      next: (res:any) => {
        console.log("result",res.data.data);
        this.dataArray=res.data.data;
      },
      error: (error) => {
        console.error('Error occurred:', error);
      }
     });
    }

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


  
