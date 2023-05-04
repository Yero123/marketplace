import { IsString, IsNumber, IsUrl, IsArray, IsNotEmpty } from "class-validator";
import { Category } from "../models/Category";
import { Product } from "../models/Product"

export interface ICreateProductDto extends Omit<Product, 'id' | 'category' | 'images'> {
  category_id: number;
  images:string;
}

export class CreateProductDto implements ICreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  category_id!: number;
  @IsString()
  @IsNotEmpty()
  title!: string;
  @IsNumber()
  @IsNotEmpty()
  price!: number;
  @IsString()
  @IsNotEmpty()
  description!: string;
  @IsString()
  @IsNotEmpty()
  images!: string;
}
