import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
@Output()featureSelected = new EventEmitter<string>();// pass data to app comp
  onSelect(feature:string){
     this.featureSelected.emit(feature);
  }
  ngOnInit() {
  }

}
