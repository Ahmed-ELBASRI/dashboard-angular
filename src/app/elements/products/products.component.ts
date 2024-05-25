import { Component, OnInit } from '@angular/core';
import { ProductRequestDto } from 'src/app/models/request/ProductRequestModel';
import { ProductResponseDto } from 'src/app/models/response/ProductResponceModel';
import { ProductServiceService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data: ProductResponseDto[] = [];
  productIdToDelete: number | null = null;
  isAddModalVisible: boolean = false;
  isDeleteModalVisible: boolean = false;
  isUpdateModalVisible: boolean = false;

  newProduct: ProductRequestDto = {
    name: '',
    description: '',
    qteStock: 0,
    prix: 0,
    image: null,
  };
  productToUpdate: ProductResponseDto = {
    id: 0,
    name: '',
    description: '',
    qteStock: 0,
    prix: 0,
    image: '',
  };

  constructor(private service: ProductServiceService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((result: ProductResponseDto[]) => {
      this.data = result;
      console.log(this.data);
    });
  }

  openDeleteModal(productId: number): void {
    this.productIdToDelete = productId;
    this.isDeleteModalVisible = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalVisible = false;
    this.productIdToDelete = null;
  }

  deleteProduct(): void {
    if (this.productIdToDelete !== null) {
      this.service.deleteProduct(this.productIdToDelete).subscribe(
        () => {
          console.log('Product deleted successfully');
          this.data = this.data.filter(
            (product) => product.id !== this.productIdToDelete
          );
          this.closeDeleteModal();
        },
        (error) => {
          console.error('Error deleting product:', error);
          this.closeDeleteModal();
        }
      );
    }
  }

  openAddModal(): void {
    this.newProduct = {
      name: '',
      description: '',
      qteStock: 0,
      prix: 0,
      image: null,
    };
    this.isAddModalVisible = true;
  }

  closeAddModal(): void {
    this.isAddModalVisible = false;
  }

  saveNewProduct(): void {
    const formData = new FormData();
    formData.append('name', this.newProduct.name);
    formData.append('description', this.newProduct.description);
    formData.append('qteStock', this.newProduct.qteStock.toString());
    formData.append('prix', this.newProduct.prix.toString());
    if (this.newProduct.image) {
      formData.append('file', this.newProduct.image);
    }

    this.service.createProduct(formData).subscribe(
      (result: ProductResponseDto) => {
        this.data.push(result);
        this.closeAddModal();
      },
      (error) => {
        console.error('Error adding product:', error);
        this.closeAddModal();
      }
    );
  }

  openUpdateModal(product: ProductResponseDto): void {
    this.productToUpdate = { ...product };
    this.isUpdateModalVisible = true;
  }

  closeUpdateModal(): void {
    this.isUpdateModalVisible = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.newProduct.image = input.files[0];
    }
  }

  saveUpdatedProduct(): void {
    const formData = new FormData();
    formData.append('name', this.productToUpdate.name);
    formData.append('description', this.productToUpdate.description);
    formData.append('qteStock', this.productToUpdate.qteStock.toString());
    formData.append('prix', this.productToUpdate.prix.toString());
    if (this.productToUpdate.image) {
      formData.append('image', this.productToUpdate.image);
    }

    this.service.updateProduct(this.productToUpdate.id, formData).subscribe(
      (result: ProductResponseDto) => {
        const index = this.data.findIndex(
          (product) => product.id === result.id
        );
        if (index !== -1) {
          this.data[index] = result;
        }
        this.closeUpdateModal();
      },
      (error) => {
        console.error('Error updating product:', error);
        this.closeUpdateModal();
      }
    );
  }
}
