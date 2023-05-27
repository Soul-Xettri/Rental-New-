import {
  BadRequestException,
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { HomeService } from './home.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { HeroSectionDto } from './dto/home.dto';
import { RoleGuard } from 'src/common/guards';
import { Public, Roles } from 'src/common/decorators';
import { ROLE } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('home')
export class HomeController {
  constructor(private readonly homeserive: HomeService) {}

  @Patch('hero')
  @ApiOperation({ summary: 'Edit Hero Section' })
  @ApiCreatedResponse({ description: 'Edit Hero Section (ADMIN)' })
  @ApiForbiddenResponse({ status: 400, description: 'Forbidden Error' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        heading: {
          type: 'string',
          description: 'Hero Section Heading',
          example: 'Heading',
        },
        subHeading: {
          type: 'string',
          description: 'Hero Section Sub-Heading',
          example: 'Sub-Heading',
        },
        description: {
          type: 'string',
          description: 'Hero section describtion',
          example: 'This is description of my hero section',
        },
        image: {
          type: 'image',
          description: 'Background hero image',
          example: 'image.sbg',
        },
      },
    },
  })
  @Roles(ROLE.SUPERADMIN, ROLE.ADMIN)
  @UseGuards(RoleGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          const name = file.originalname.split('.')[0];
          const fileExtentsion = file.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtentsion;

          callback(null, newFileName);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG)$/)) {
          return callback(null, false);
        } else {
          callback(null, true);
        }
      },
    }),
  )
  updateHeroSection(
    @Body() dto: HeroSectionDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.homeserive.updateHeroSection(dto, file);
  }

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          const name = file.originalname.split('.')[0];
          const fileExtentsion = file.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtentsion;

          callback(null, newFileName);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG)$/)) {
          return callback(null, false);
        } else {
          callback(null, true);
        }
      },
    }),
  )
  uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is not an image');
    } else {
      const response = {
        filePath: `http://localhost:3000/api/home/pictures/${file.filename}`,
      };
      return response;
    }
  }
  @Public()
  @Get('pictures/:filename')
  getPicture(@Param('filename') filename, @Res() res: Response) {
    res.sendFile(filename, { root: './uploads' });
  }
}
