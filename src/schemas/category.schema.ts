import { IsString, IsNumber, IsUrl, IsArray, IsNotEmpty } from "class-validator";
import { Category } from "../models/Category";


export interface ICreateCategoryDto extends Omit<Category, 'id'> {

}

export class CreateCategoryDto implements ICreateCategoryDto {

  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsString()
  @IsNotEmpty()
  image?: string | undefined;

}