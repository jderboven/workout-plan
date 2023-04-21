import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const plan = await prisma.plan.create({
    data: {
      name: 'Workout plan',
      days: {
        create: [
          {
            name: 'pecs-biceps',
            day: 'saturday',
            exercises: {
              create: [
                { name: 'Chest press', repRange: '8-12', difficulty: 3 },
                { name: 'Cable flyes', repRange: '10-30', difficulty: 2 },
                { name: 'Curls', repRange: '10-20', difficulty: 2 },
              ],
            },
          },
          {
            name: 'back',
            day: 'tuesday',
            exercises: {
              create: [
                { name: 'Pull ups', repRange: '10', difficulty: 3 },
                { name: 'Seated cable rows', repRange: '10-20', difficulty: 2 },
              ],
            },
          },
        ],
      },
    },
    include: {
      days: {
        include: {
          exercises: true,
        },
      },
    },
  });

  console.log('Inserted workout plan', plan);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
