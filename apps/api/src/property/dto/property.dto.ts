import { Type } from '@prisma/client';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PropertyDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  availability: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsNotEmpty()
  @IsString()
  photos: string;

  @IsOptional()
  @IsString()
  thumbnail: string;

  @IsNotEmpty()
  @IsString()
  restrictions:string;

  @IsNotEmpty()
  @IsString()
  terms:string;
  
  @IsNotEmpty()
  @IsString()
  additionalAmenities:string;

  @IsOptional()
  @IsBoolean()
  featured:boolean;

  @IsNotEmpty()
  @IsEnum(Type, {
    each: true,
    message() {
      return (
        'Provided value is invalid. Valid values are' +
        Object.values(Type).map((e) => e)
      );
    },
  })
  type: Type;
}
