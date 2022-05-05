import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varieties',
  templateUrl: './varieties.component.html',
  styleUrls: ['./varieties.component.css']
})
export class VarietiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pizzaItems = [
    { "name": "Arugula", "desc": "Tomato sauce, Greek feta, Arugula, Parmesan" },
    {
      "name": "Calamari", "desc": "Tomato sauce, Calamari (squid rings), Garlic, Lemon juice, Parsley, a pinch of pepper and salt"
    },
    {
      "name": "Cevapcici", "desc": "Ajvar, Feta, Cevapcici, Garlic, Onion, Lemon juice, Hot chili pepper flakes"
    },
    {
      "name": "Feta", "desc": "Tomato sauce, Greek feta, Kalamata olives, Olive oil, Greek herbs"
    },
    {
      "name": "Fish", "desc": "Tomato sauce, Pollock fillets, Lime juice, Garlic, Onion, Parsley"
    },
    {
      "name": "Greek", "desc": "Tzatziki, Gyros meat, Tomatoes, Greek herbs "
    },
    {
      "name": "Gyros	", "desc": "Gyros sauce, Garlic sauce, Gyros meat, Garlic, Onions, Pepper, Salt"
    },
    { "name": "Gyros Calzone (folded)	", "desc": "Gyros sauce, Tomato sauce, Feta, Gyros meat, Garlic, Pepper, Salt" },
    {
      "name": "Keftethes", "desc": "Gyros sauce, Tomato sauce, Feta, Gyros meat, Garlic, Pepper, Salt"
    },
    {
      "name": "Keftethes	", "desc": "Tomato sauce, Feta, Keftethes, Cherry tomatoes, Garlic, Onions, Lemon juice, Thyme, Mint"
    }
  ];
}
