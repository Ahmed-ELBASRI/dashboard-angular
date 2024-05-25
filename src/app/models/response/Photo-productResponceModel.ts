export interface Product {
  id: number;
  name: string;
  description: string;
  qteStock: number;
  prix: number;
}
export interface PhotoproductResponseDto {
  photoProduitId: number;
  produit?: Product;
  productId: number;
}
