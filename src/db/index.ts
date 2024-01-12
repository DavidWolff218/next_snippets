import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient()

//example of how we can use the db to create an instance
// db.snippet.create({
//   data: {
//     title: "Title!",
//     code: 'const abd = () => {}'
//   }
// })