export interface Product {
  name: string;
  description: string;
  qteStock: number;
  prix: number;
}
export interface PhotoproductRequestDto {

  produit?: Product;
  productId: number;
}
