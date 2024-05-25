export interface ProductRequestDto {
  name: string;
  description: string;
  qteStock: number;
  prix: number;
  image: File | null;
}
