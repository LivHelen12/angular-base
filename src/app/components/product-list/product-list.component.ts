import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../types/products';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductAlertsComponent,
    RouterModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  products: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts()
  };

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
