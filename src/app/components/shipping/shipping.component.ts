import { Observable } from 'rxjs';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})

export class ShippingComponent {
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
