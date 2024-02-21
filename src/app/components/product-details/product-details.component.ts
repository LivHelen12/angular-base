import { ActivatedRoute } from '@angular/router';
import { Product } from './../../types/products';
import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  products: Observable<Product[]> = new Observable<Product[]>();
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();

    // Obtem o id do produto através do parâmetro de rota
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encontra o produto que corresponde ao id do produto fornecido na rota.
    this.products = this.productService.getProducts();
    this.products.subscribe(products => {
      this.product = products.find(product => product.id === productIdFromRoute);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

  ngOnDestroy() {
    this.products.subscribe().unsubscribe();
  }
}