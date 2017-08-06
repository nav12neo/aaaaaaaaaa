import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-panel',
  templateUrl: './kpi-panel.component.html',
  styleUrls: ['./kpi-panel.component.css']
})
export class KpiPanelComponent implements OnInit {
  

  kpiPanels = [
  		{efficiency : 99, label : "Pune", class : "status_purple" },
  		{efficiency : 86, label : "Delhi", class : "status_green" },
  		{efficiency : 69, label : "Pune(Chakan)", class : "status_pink"  }
  ]	
  constructor() { }

  ngOnInit() {
  }

}
