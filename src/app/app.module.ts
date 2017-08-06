import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'hammerjs'

import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdIconModule, MdToolbarModule, MdMenuModule, MdSidenavModule,
        MdButtonModule, MdCheckboxModule, MdProgressBarModule,
        MdListModule, MdSelectModule,MdDatepickerModule,
        MdProgressSpinnerModule, MdCardModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HighChartStackedColumnComponent } from './high-chart-stacked-column/high-chart-stacked-column.component';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { HighChartActivityGaugeComponent } from './high-chart-activity-gauge/high-chart-activity-gauge.component';
import { HighChartPieDrillDownComponent } from './high-chart-pie-drill-down/high-chart-pie-drill-down.component';
import { GlobalFilterComponent } from './app-global-filter/app-global-filter.component';
import { KpiPanelComponent } from './kpi-panel/kpi-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    HighChartStackedColumnComponent,
    HighChartActivityGaugeComponent,
    HighChartPieDrillDownComponent,
    GlobalFilterComponent,
    KpiPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdToolbarModule,
    MdMenuModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdListModule,
    Ng2HighchartsModule,
    MdSelectModule,
    MdDatepickerModule,
    MdProgressSpinnerModule, 
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
