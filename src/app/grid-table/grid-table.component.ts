import { Component, OnInit } from '@angular/core';
import {DataGridListService } from '../data-grid-list.service'

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements OnInit {
  
 constructor(public dataGridList:DataGridListService){

 }
  
  ngOnInit() {
    var p: number = 1;
    var collection =JSON.stringify(this.dataGridList.dataList);
  }
}
