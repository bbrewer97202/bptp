import { PrismaClient } from '@prisma/client';
import regions from '../src/data/seed-region.json' assert { type: 'json' };

const prisma = new PrismaClient();

// interface Region {
//   name: string
// }

const main = async () => {

  // TODO: how to reset
  // await prisma.$queryRaw`ALTER SEQUENCE Region_id_seq RESTART WITH 1`;
  // await prisma.$queryRaw`ALTER TABLE Region AUTO_INCREMENT = 1`
  // await prisma.$queryRaw`ALTER SEQUENCE Region_id_seq RESTART WITH 1`;
  // await prisma.$queryRaw`SELECT setval('region_id_seq', 1);`;
  // Route_id_seq
  await prisma.region.deleteMany()
  console.log('Deleted regions')

  // console.log('reset region auto increment to 1')


  for (const region of regions) {
    const { name } = region;
    await prisma.region.create({
      data: {
        name
      }
    })
    console.log(`Seeded region "${name}"`);
    // await prisma.region.create({
    //   where: { name },
    //   update: { },
    //   create: { name },
    // });
  }

  // const alice = await prisma.user.upsert({
  //   where: { email: 'alice@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //     posts: {
  //       create: {
  //         title: 'Check out Prisma with Next.js',
  //         content: 'https://www.prisma.io/nextjs',
  //         published: true,
  //       },
  //     },
  //   },
  // })
  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Nexus on Twitter',
  //           content: 'https://twitter.com/nexusgql',
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // })
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
