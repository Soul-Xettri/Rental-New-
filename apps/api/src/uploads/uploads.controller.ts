import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadsService } from './uploads.service';
import { Public } from 'src/common/decorators';

@Controller('uploads')
export class UploadsController {
  constructor(
    private prisma: PrismaService,
    private readonly uploadservice: UploadsService,
  ) {}

  @Post('')
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
  async uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is not an image');
    } else {
      await this.prisma.uploads.create({
        data: {
          fileName: `http://localhost:3000/api/uploads/pictures/${file.filename}`,
        },
      });

      return { uploaded: true };
    }
  }

  @Get('')
  getPicture() {
    return this.uploadservice.getFiles();
  }

  @Public()
  @Get('pictures/:filename')
  getPicture1(@Param('filename') filename, @Res() res: Response) {
    res.sendFile(filename, { root: './uploads' });
  }
}
