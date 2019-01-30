import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss']
})
export class DashboardUIComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit() {
      
  }

  addReportUI(){
    this.router.navigate(['add-report']);
  }
}
