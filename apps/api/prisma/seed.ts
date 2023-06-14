import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password', 10);
  await prisma.user.create({
    data: {
      name: 'Soul Xettri',
      mobileNumber: '98XXXXXXXXX',
      email: 'iamhere@whatsup.com',
      password: password,
      role: 'SUPERADMIN',
    },
  });
  await prisma.heroSection.create({
    data: {
      heading: 'Wellcome to Rentals',
      subHeading: 'Your Gateway to Premium Properties!',
      description:
        "Find your dream home with ease, whether you're looking to rent or buy. We are your trusted destination for exceptional rental properties and enticing sale options. Our extensive collection of listings is meticulously curated to meet the diverse needs and preferences of our valued clients.",
      image:
        'http://localhost:3000/api/home/pictures/bg7_1686749362075.jpg',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
