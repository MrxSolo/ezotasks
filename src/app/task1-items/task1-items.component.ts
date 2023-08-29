import { Component, OnInit } from '@angular/core';
import {Task1ItemsService} from '../task1-items.service'

@Component({
  selector: 'app-task1-items',
  templateUrl: './task1-items.component.html',
  styleUrls: ['./task1-items.component.css']
})
export class Task1ItemsComponent implements OnInit {

  items: any[] = [];
  totalItemsToShow = 2000;

  constructor(private itemService: Task1ItemsService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((response: any) => {
      this.items = response.items.slice(0, this.totalItemsToShow);
      console.log(this.items);
      
    });
  }

}