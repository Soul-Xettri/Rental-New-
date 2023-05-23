import { GENDER, PROVINCE } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class KycDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(GENDER, {
    each: true,
    message() {
      return (
        'Provided value is invalid. Valid values are' +
        Object.values(GENDER).map((e) => e)
      );
    },
  })
  gender: GENDER;

  @IsNotEmpty()
  @IsString()
  dob: string;

  @IsNotEmpty()
  @IsString()
  father_husbandName: string;

  @IsNotEmpty()
  @IsString()
  grandfather_fatherInLawName: string;

  @IsOptional()
  @IsString()
  spouseName: string;

  @IsNotEmpty()
  @IsString()
  occupation: string;

  @IsOptional()
  @IsString()
  panNumber: string;

  @IsOptional()
  @IsString()
  landLineNumber: string;

  @IsNotEmpty()
  @IsString()
  documentIssuedAddress: string;

  @IsNotEmpty()
  @IsString()
  faceImage: string;

  @IsNotEmpty()
  @IsString()
  frontdocumentImage: string;

  @IsNotEmpty()
  @IsString()
  backdocumentImage: string;

  @IsNotEmpty()
  @IsEnum(PROVINCE, {
    each: true,
    message() {
      return (
        'Provided value is invalid. Valid values are' +
        Object.values(PROVINCE).map((e) => e)
      );
    },
  })
  per_province: PROVINCE;

  @IsNotEmpty()
  @IsString()
  per_district: string;

  @IsNotEmpty()
  @IsString()
  per_vdc_Municipality: string;

  @IsNotEmpty()
  @IsEnum(PROVINCE, {
    each: true,
    message() {
      return (
        'Provided value is invalid. Valid values are' +
        Object.values(PROVINCE).map((e) => e)
      );
    },
  })
  curr_province: PROVINCE;

  @IsNotEmpty()
  @IsString()
  curr_district: string;

  @IsNotEmpty()
  @IsString()
  curr_vdc_Municipality: string;
}
