
import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../ui/footer/footer.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../types/Product.interface';



@Component({
  selector: 'app-display',
  standalone: true,

  imports: [RouterLink, CommonModule, HttpClientModule, FooterComponent, NavbarComponent],

  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {


  selectedProduct: ProductInterface | null = null;
  product_id: string | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}


  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['id'];
    this.getProduct()
  }


  getProduct() {
    if (this.product_id) {
      this.productService.getProduct(this.product_id).subscribe(product => {
        console.log(product);
        this.selectedProduct = product
      })
    }
  }

}


