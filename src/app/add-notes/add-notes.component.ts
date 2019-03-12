import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
 @Output() AddNoteFromAddNoteComp = new EventEmitter<object>();//pass to home comp
 
 
  constructor() { }

  ngOnInit() {}

  AddNote(name:HTMLInputElement,content:HTMLInputElement){
   
       this.AddNoteFromAddNoteComp.emit({
        name:name.value,
        content:content.value
       });
      
  }
}
