import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { x: { stacked: true }, y: { stacked: true } }
  };
  public barChartLabels: Label[] = ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5']; // Add your date labels here
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [10, 15, 20, 25, 30], label: 'PDF Downloads' }, // Replace data with your PDF download counts
    { data: [5, 8, 12, 16, 20], label: 'Other Downloads' } // Replace data with your other download counts
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  constructor(){

  }



 

}
