import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoading: boolean = true;
  userEfficiency = {
    title : "User Efficiency",
    categories : [
            'NASIM',
            'RAJU DORNEVAD',
            'SAHEBRAO',
            'SAMBHAJI MASKE',
            'SANDHYA',
            'SAVITA',
            'SHIVANAND',
            'TANAJI'
        ],
    series : [{
        name: 'User Efficiency',
        data: [92, 71, 74, 86, 97, 52, 77, 72]

    }]
  };

  machineEfficiency = {
    title : "Machine Efficiency",
    categories : [
            'G2',
            'G3',
            'G4',
            'G5',
            'G6'
        ],
    series : [{
        name: 'Machine Efficiency',
        data: [59.6, 50, 74, 45, 54]

    }]
  };

  userChartData = {
    chart: {
      type: 'column'
    },
    title: {
        text: this.userEfficiency.title
    },
    xAxis: {
        categories: this.userEfficiency.categories,
        crosshair: true
    },
   yAxis: {
        min: 0,
        title: {
            text: 'Efficiency (in %)'
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: 'white'
            }
        }
    },
    series: this.userEfficiency.series
  };

  machineChartData = {
    chart: {
      type: 'column'
    },
    title: {
        text: this.machineEfficiency.title
    },
    xAxis: {
        categories: this.machineEfficiency.categories,
        crosshair: true
    },
   yAxis: {
        min: 0,
        title: {
            text: 'Efficiency (in %)'
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: 'white'
            }
        }
    },
    series: this.machineEfficiency.series
  };

  constructor() {
	setTimeout(() => {
      this.isLoading =  false;
    }, 1000);
   }
  ngOnInit() {
  }

}
