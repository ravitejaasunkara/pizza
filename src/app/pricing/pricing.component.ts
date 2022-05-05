import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pizzaPrices = [
      { "name": "Arugula", "desc": "3$" },
      {
        "name": "Calamari", "desc": "4$"
      },
      {
        "name": "Cevapcici", "desc": "5$"
      },
      {
        "name": "Feta", "desc": "3.5$"
      },
      {
        "name": "Fish", "desc": "5$"
      },
      {
        "name": "Greek", "desc": "2.5$"
      },
      {
        "name": "Gyros	", "desc": "6$"
      },
      { "name": "Gyros Calzone (folded)	", "desc":"6$" },
      {
        "name": "Keftethes", "desc": "2.3$"
      },
      {
        "name": "Keftethes	", "desc": "3.4$"
      }
  ];
}
