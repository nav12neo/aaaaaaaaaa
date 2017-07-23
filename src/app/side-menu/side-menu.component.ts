import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    menus = [
      {
        name: 'Home',
        icon:"home",
        state: "sdsd",
      },
      {
        name: 'Dashboard',
        icon:"home",
        state: "nmnm"
      }
    ];

    navigateTo = function(link){
      console.log(link);
    }

  constructor() { }

  ngOnInit() {
  }

}
