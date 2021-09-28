import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  display: boolean = false;
  data!: any[];
  items!: any[];
  sideBarOpen = true;

  constructor(
   
  ) {}

  ngOnInit(): void {
    //HANDEL SHOW / HIDE MODEL DELETE
  

    
  }

  toggleSideMenu(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
