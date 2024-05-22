import { Component, OnInit } from '@angular/core';
import { AttProductRequestModel } from 'src/app/models/request/AttProductRequestModel';
import { ProductRequestDto } from 'src/app/models/request/ProductRequestModel';
import { AttProductResponseDto } from 'src/app/models/response/AttProductResponceModel';
import { ProductResponseDto } from 'src/app/models/response/ProductResponceModel';
import { AttPoductServiceService } from 'src/app/service/att-poduct-service.service';

@Component({
  selector: 'app-att-products',
  templateUrl: './attproducts.component.html',
  styleUrls: ['./attproducts.component.css'],
})
export class AttProductsComponent implements OnInit {
  data: AttProductResponseDto[] = [];
  productIdToDelete: number | null = null;
  isAddModalVisible: boolean = false;
  isDeleteModalVisible: boolean = false;
  isUpdateModalVisible: boolean = false;

  newProduct: ProductRequestDto = {
    name: '',
    description: '',
    qteStock: 0,
    prix: 0,
    image: '',
  };
  productToUpdate: ProductResponseDto = {
    id: 0,
    name: '',
    description: '',
    qteStock: 0,
    prix: 0,
    image: '',
  };

  constructor(private service: AttPoductServiceService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((result: AttProductResponseDto[]) => {
      this.data = result;
      console.log(this.data);
    });
  }

  openDeleteModal(productId: number): void {
    // this.productIdToDelete = productId;
    // this.isDeleteModalVisible = true;
  }

  closeDeleteModal(): void {
    // this.isDeleteModalVisible = false;
    // this.productIdToDelete = null;
  }

  deleteProduct(): void {
    // if (this.productIdToDelete !== null) {
    //   this.service.deleteProduct(this.productIdToDelete).subscribe(
    //     () => {
    //       console.log('Product deleted successfully');
    //       this.data = this.data.filter(
    //         (product) => product.id !== this.productIdToDelete
    //       );
    //       this.closeDeleteModal();
    //     },
    //     (error) => {
    //       console.error('Error deleting product:', error);
    //       this.closeDeleteModal();
    //     }
    //   );
    // }
  }

  openAddModal(): void {
    this.newProduct = {
      name: '',
      description: '',
      qteStock: 0,
      prix: 0,
      image: '',
    };
    this.isAddModalVisible = true;
  }

  closeAddModal(): void {
    this.isAddModalVisible = false;
  }

  saveNewProduct(): void {
    // console.log(this.newProduct);
    // this.service.createProduct(this.newProduct).subscribe(
    //   (result: ProductResponseDto) => {
    //     this.data.push(result);
    //     this.closeAddModal();
    //   },
    //   (error) => {
    //     console.error('Error adding product:', error);
    //     this.closeAddModal();
    //   }
    // );
  }

  openUpdateModal(product: ProductResponseDto): void {
    this.productToUpdate = { ...product };
    this.isUpdateModalVisible = true;
  }

  closeUpdateModal(): void {
    this.isUpdateModalVisible = false;
  }

  saveUpdatedProduct(): void {
    // const updateRequest: ProductRequestDto = {
    //   name: this.productToUpdate.name,
    //   description: this.productToUpdate.description,
    //   qteStock: this.productToUpdate.qteStock,
    //   prix: this.productToUpdate.prix,
    //   image: this.productToUpdate.image,
    // };

    // this.service
    //   .updateProduct(this.productToUpdate.id, updateRequest)
    //   .subscribe(
    //     (result: ProductResponseDto) => {
    //       const index = this.data.findIndex(
    //         (product) => product.id === result.id
    //       );
    //       if (index !== -1) {
    //         this.data[index] = result;
    //       }
    //       this.closeUpdateModal();
    //     },
    //     (error) => {
    //       console.error('Error updating product:', error);
    //       this.closeUpdateModal();
    //     }
    //   );
  }
}
