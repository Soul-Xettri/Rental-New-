import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HeroSectionDto } from './dto/home.dto';
import multer, { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class HomeService {
  constructor(private prisma: PrismaService) {}

  async updateHeroSection(dto: HeroSectionDto, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is not an image');
    } else {
      dto.image = `http://localhost:3000/api/home/pictures/${file.filename}`;
    }

    const hero = await this.prisma.heroSection.upsert({
      where: { id: 1 },
      create: {
        heading: dto.heading,
        subHeading: dto.subHeading,
        description: dto.description,
        image: dto.image,
      },
      update: {
        heading: dto.heading,
        subHeading: dto.subHeading,
        description: dto.description,
        image: dto.image,
      },
    });
    return hero;
  }

  async getHero() {
    const hero = await this.prisma.heroSection.findFirst({
      where: {
        id: 1,
      },
    });
    return hero;
  }
}
