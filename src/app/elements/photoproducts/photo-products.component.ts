import { Component, OnInit } from '@angular/core';
import { ProductResponseDto } from 'src/app/models/response/ProductResponceModel';
import { ProductServiceService } from 'src/app/service/products.service';

@Component({
  selector: 'app-photo-products',
  templateUrl: './photo-products.component.html',
  styleUrls: ['./photo-products.component.css'],
})
export class PhotoProductsComponent implements OnInit {
  data: ProductResponseDto[] = [];
  productIdToDelete: number | null = null;
  isModalVisible: boolean = false; // Variable to control modal visibility

  constructor(private service: ProductServiceService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((result: ProductResponseDto[]) => {
      this.data = result;
      console.log(this.data);
    });
  }

  openDeleteModal(productId: number): void {
    this.productIdToDelete = productId;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.productIdToDelete = null;
  }

  onclick(): void {
    if (this.productIdToDelete !== null) {
      this.service.deleteProduct(this.productIdToDelete).subscribe(
        () => {
          console.log('Product deleted successfully');
          this.data = this.data.filter(
            (product) => product.id !== this.productIdToDelete
          );
          this.closeModal();
        },
        (error) => {
          console.error('Error deleting product:', error);
          this.closeModal();
        }
      );
    }
  }
}
