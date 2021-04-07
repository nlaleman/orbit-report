import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({  
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})



export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

search(searchTerm: string): void {
   let matchingSatellites: Satellite[] = [];
   searchTerm = searchTerm.toLowerCase();
   for(let j=0; j < this.sourceList.length; j++) {
      let name = this.sourceList[j].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
         matchingSatellites.push(this.sourceList[j]);
      }
   }
   // assign this.displayList to be the array of matching satellites
   // this will cause Angular to re-make the table, but now only containing matches
   this.displayList = matchingSatellites;
}

}