import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans = [
    {
      id_PlanPaiement: 1,
      name: 'Personal',
      price: 15,
      features: ['2 Free Domain Name', '3 One-Click Apps', '1 Database', 'Money Back Guarantee', '24/7 support']
    },
    {
      id_PlanPaiement: 2,
      name: 'Team',
      price: 25,
      features: ['3 Free Domain Name', '4 One-Click Apps', '2 Databases', 'Money Back Guarantee', '24/7 support']
    },
    {
      id_PlanPaiement: 3,
      name: 'Business',
      price: 99,
      features: ['5 Free Domain Name', '8 One-Click Apps', '2 Databases', 'Money Back Guarantee', '24/7 support']
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.plans); 
  }
}
