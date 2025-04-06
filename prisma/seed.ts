// import { PrismaClient } from '@prisma/client'
// import { faker } from '@faker-js/faker'

// // const prisma = new PrismaClient();

// const prisma = new PrismaClient()


// async function main() {
//   // generate fake data for todo model 
//   await prisma.todo.createMany({
//     data: Array.from({ length: 25 }).map(() => (
//       {
//         title: faker.lorem.sentence({ min: 3, max: 8 }),
//         body: faker.lorem.paragraph(),
//       }
//     ))
//   })





// // generate fake data for user model 
//   // await prisma.user.createMany({
//   //   data: Array.from({ length: 25 }).map(() => (
//   //     {
//   //       email: faker.internet.email(),
//   //       name: faker.internet.userName(),
//   //       address: {
//   //         street: faker.location.street(),
//   //         city: faker.location.city(),
//   //         state: faker.location.state(),
//   //         zip: faker.location.zipCode(),
//   //       },      
//   //     }
//   //   ))
//   // })
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })