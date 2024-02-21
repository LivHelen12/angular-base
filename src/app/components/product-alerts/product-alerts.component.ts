import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Product } from '../../types/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.scss'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
