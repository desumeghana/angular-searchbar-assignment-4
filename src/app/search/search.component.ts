import { Component,EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 
  searchedvalue:string="";

  @Output()
  searchtextchanged:EventEmitter<string>=new EventEmitter();

  search()
  {
    this.searchtextchanged.emit(this.searchedvalue);
  }
}
