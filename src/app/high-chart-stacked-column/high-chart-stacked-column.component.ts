import { Component, Input } from '@angular/core';
import { Ng2HighchartsModule } from 'ng2-highcharts';

@Component({
  selector: 'app-high-chart-stacked-column',
  templateUrl: './high-chart-stacked-column.component.html',
  styleUrls: ['./high-chart-stacked-column.component.css']
})
export class HighChartStackedColumnComponent {
   
   @Input() chartData: any;  

  constructor() { }

}
