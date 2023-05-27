import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UploadsService {
  constructor(private prisma: PrismaService) {}

  async getFiles() {
    const uploads = await this.prisma.uploads.findMany({});
    return uploads;
  }
}
