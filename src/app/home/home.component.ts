import { Component, OnInit, Output ,EventEmitter, DoCheck} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,DoCheck{
   arrOfNotes=[];

   numberOfNotes:number;

  constructor() { }
  ngOnInit() { }

  addNote(note:{name:string ,content:string}){
 this.arrOfNotes.push({
  name:note.name,
  content:note.content
 });   
 }

ngDoCheck(){
  this.numberOfNotes = this.arrOfNotes.length
}
 deleteOlderNote(){
  this.arrOfNotes.splice(0, 1);
}
deleteLastNote(){
  this.arrOfNotes.splice(this.arrOfNotes.length-1)
}
 
 


 deleteNote(){

 }
 


}
