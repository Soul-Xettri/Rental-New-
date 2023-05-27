import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UploadsService, PrismaService],
  controllers: [UploadsController],
})
export class UploadsModule {}
