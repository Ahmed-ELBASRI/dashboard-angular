import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-cust',
  templateUrl: './single-cust.component.html',
  styleUrls: ['./single-cust.component.css']
})
export class SingleCustComponent {
  @Input() name :string="";
  @Input() id :string="";
  @Input() status :string="";
}
