import { Component,Input } from '@angular/core';
interface Product{
    "image": string,
    "name":string,
    "price":number
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  product:Product|undefined;

  addToCart(product:Product)
  {
    
  }
}
