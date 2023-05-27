import { IsString, IsOptional } from 'class-validator';
export class HeroSectionDto {
  @IsOptional()
  @IsString()
  heading: string;

  @IsOptional()
  @IsString()
  subHeading: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  image: string;
}
