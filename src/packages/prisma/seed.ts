import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
//    accounts: {
//     create:[
//         {
//             provider:'github',
//             providerAccountId:1,
//             access_token:'access_token_1',
//             token_type:'bearer',
//             type:'oauth',

//         }
//     ]
//    }
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
   
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
   
  },
] satisfies Prisma.UserCreateInput[]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
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
// "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} src/prisma/seed.ts"