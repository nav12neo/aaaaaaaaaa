import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs'

import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdIconModule, MdToolbarModule, MdMenuModule, MdSidenavModule,
        MdButtonModule, MdCheckboxModule,MdProgressBarModule,
        MdListModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HighChartStackedColumnComponent } from './high-chart-stacked-column/high-chart-stacked-column.component';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { HighChartActivityGaugeComponent } from './high-chart-activity-gauge/high-chart-activity-gauge.component';
import { HighChartPieDrillDownComponent } from './high-chart-pie-drill-down/high-chart-pie-drill-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    HighChartStackedColumnComponent,
    HighChartActivityGaugeComponent,
    HighChartPieDrillDownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdToolbarModule,
    MdMenuModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdListModule,
    Ng2HighchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
