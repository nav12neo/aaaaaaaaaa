import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-filter',
  templateUrl: './app-global-filter.component.html',
  styleUrls: ['./app-global-filter.component.css']
})
export class GlobalFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedRegion: string;
  selectedDays: string;

  regions = [
    {value: 'pun_main', viewValue: 'Pune'},
    {value: 'delhi', viewValue: 'Delhi'},
    {value: 'pun_chakan', viewValue: 'Pune (Chakan)'}
  ];
  days = [
    {value: '1', viewValue: 'Today'},
    {value: '7', viewValue: 'Last 7 Days'},
    {value: '30', viewValue: 'Last 30 Days'},
    {value: '60', viewValue: 'Last 60 Days'},
    {value: '90', viewValue: 'Last 90 Days'},
    {value: '365', viewValue: 'All'},
  ];

}
