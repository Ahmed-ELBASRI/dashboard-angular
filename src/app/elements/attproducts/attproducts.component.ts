import { Component, OnInit } from '@angular/core';
import { AttProductRequestModel } from 'src/app/models/request/AttProductRequestModel';
import { AttProductResponseDto } from 'src/app/models/response/AttProductResponceModel';
import { ProductResponseDto } from 'src/app/models/response/ProductResponceModel';
import { AttPoductServiceService } from 'src/app/service/att-poduct-service.service';
import { ProductServiceService } from 'src/app/service/products.service';

@Component({
  selector: 'app-att-products',
  templateUrl: './attproducts.component.html',
  styleUrls: ['./attproducts.component.css'],
})
export class AttProductsComponent implements OnInit {
  data: AttProductResponseDto[] = [];
  productsdata: ProductResponseDto[] = [];
  idProductToDelet: Number = 0;

  constructor(
    private attProductservice: AttPoductServiceService,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((result: ProductResponseDto[]) => {
        this.productsdata = result;
        console.log(this.data);
      });
    this.loadAttProducts();
  }

  loadAttProducts(): void {
    this.attProductservice
      .getProducts()
      .subscribe((response: AttProductResponseDto[]) => {
        this.data = response;
      });
  }

  attProduct: AttProductRequestModel = {
    cle: '',
    productId: 0,
    valeur: '',
  };

  attproductToUpdate: AttProductResponseDto = {
    id: 0,
    product: 0,
    valeur: '',
    cle: '',
  };

  isAddModalVisible = false;
  isUpdateModalVisible = false;
  isDeleteModalVisible = false;

  openAddModal() {
    this.isAddModalVisible = true;
  }

  closeAddModal() {
    this.isAddModalVisible = false;
  }

  saveNewAttProduct() {
    this.attProductservice.addProduct(this.attProduct).subscribe(
      (result: AttProductResponseDto) => {
        this.loadAttProducts();
        this.closeAddModal();
      },
      (error) => {
        console.error('Error adding product:', error);
        this.closeAddModal();
      }
    );

    this.attProduct = {
      cle: '',
      productId: 0,
      valeur: '',
    };
    this.closeAddModal();
  }

  openUpdateModal(product: AttProductResponseDto) {
    this.attproductToUpdate = { ...product };
    this.isUpdateModalVisible = true;
  }

  closeUpdateModal() {
    this.isUpdateModalVisible = false;
  }

  saveUpdatedAttProduct() {
    this.attProductservice
      .updateProduct(this.attproductToUpdate.id, {
        cle: this.attproductToUpdate.cle,
        //productId: 11,
        productId: this.attproductToUpdate.product, // Ensure this matches your data structure
        valeur: this.attproductToUpdate.valeur,
      })
      .subscribe(
        (result) => {
          this.loadAttProducts();
          this.closeUpdateModal();
        },
        (error) => {
          console.error('Error updating product:', error);
          this.closeUpdateModal();
        }
      );
  }

  openDeleteModal(productId: number) {
    this.idProductToDelet = productId;
    this.isDeleteModalVisible = true;
  }

  closeDeleteModal() {
    this.isDeleteModalVisible = false;
  }

  deleteAttProduct() {
    if (this.idProductToDelet != 0) {
      this.attProductservice
        .deleteProduct(this.idProductToDelet)
        .subscribe(() => {
          this.loadAttProducts();
        });
    }
    this.closeDeleteModal();
  }
}
