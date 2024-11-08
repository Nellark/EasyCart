import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';  // Ensure this path is correct
import { ProductsResponseInterface, ProductInterface } from '../types/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {

    return this.http.get<ProductsResponseInterface>(environment.SERVER);
  }

  getProduct(product_id: string) {

    return this.http.get<ProductInterface>(`${environment.SERVER}/${product_id}`);
  }
}
