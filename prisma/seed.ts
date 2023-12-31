import { PrismaClient, type Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData = [
  {
    name: 'Ryan',
    email: 'ryan@prisma.io',
    notes: {
      create: [
        {
          title: 'Join the Prisma Slack',
          content: 'https://slack.prisma.io',
          published: true
        }
      ]
    }
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    notes: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true
        }
      ]
    }
  },
  {
    name: 'Hanna-Leena',
    email: 'hanna-leena@prisma.io',
    notes: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube'
        }
      ]
    }
  }
]

async function main(): Promise<void> {
  console.log('Start seeding ...')
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
