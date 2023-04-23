import { IsString, IsNumber, IsUrl, IsArray, IsNotEmpty } from "class-validator";
import { Category } from "../models/Category";
import { Product } from "../models/Product"

export interface ICreateProductDto extends Omit<Product, 'id' | 'category'> {

}

export class CreateProductDto implements ICreateProductDto {
  @IsString()
  @IsNotEmpty()
  title!: string;
  @IsNumber()
  @IsNotEmpty()
  price!: number;
  @IsString()
  @IsNotEmpty()
  description!: string;
  @IsNumber()
  @IsNotEmpty()
  categoryId!: number;
  @IsArray()
  @IsString({ each: true }) 
  images!: string[];
}