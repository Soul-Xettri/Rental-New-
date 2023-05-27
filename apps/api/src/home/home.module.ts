import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [HomeService, PrismaService],
  controllers: [HomeController],
})
export class HomeModule {}
