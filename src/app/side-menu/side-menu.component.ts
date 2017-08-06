import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    user_name = "John"
    menus = [
      {
        name: 'Home',
        icon:"home",
        state: "home",
      },
      {
        name: 'Dashboard',
        icon:"dashboard",
        state: "dashboard"
      },
      {
        name: 'Logout',
        icon:"exit_to_app",
        state: "logout"
      }
    ];

    navigateTo = function(link){
      console.log(link);
    }

  constructor() { }

  ngOnInit() {
  }

}
