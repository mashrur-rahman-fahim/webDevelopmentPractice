import { PrismaClient } from "@prisma/client";
// const prisma=new PrismaClient({log:["query"]})
const prisma=new PrismaClient()

async function main() {
    // await prisma.userPreference.deleteMany()
    // await prisma.user.deleteMany()
//    const user= await prisma.user.create({
//         data:{
//             name:"sldf",
//             email:"sdf.sldf",
//             age:24,
//             userPreference:{
//                 create:{
//                     emailUpdates:true,
//                 }
//             }
            

//         },
//         // include:{
//         //     userPreference:true
//         // }
//         select:{
//             name:true,
//             userPreference:{
//                 select:{
//                     id:true
//                 }
//             }
//         }
//     })
//    const user= await prisma.user.createMany({
//         data:[{
//             name:"sldf",
//             email:"sdf.sldf",
//             age:24,
         
            

//         },
//         {
//             name:"Mashrur",
//             email:"sdf1.sldf",
//             age:24,
         
            

//         }
    
//     ],
       
//     })
    // const users=await prisma.user.findMany()
//     console.log(user)
    // console.log(users)
    // const userFind=await prisma.user.findUnique({
    //     where:{
    //         // email:"sdf.sldf"
    //         name_age:{
    //             name:"sldf",
    //             age:24
    //         }
    //     }
    // })
    // const userFind=await prisma.user.findFirst({
    //     where:{
    //         // name:'sldf'
    //         name:{not:"sldf"}//not equal
    //     },
        // orderBy:{
        //     age:'desc'
        // },
        // take:2,//this will take first 2 user with this name
        // skip:1,
    // })



    // const userFind=await prisma.user.update({
    //    where:{
    //      email:"new"
    //    },
    //    data:{
    //     email:"newemail.com2"
    //    }
    // })
    const userFind=await prisma.user.findMany()

    console.log(userFind)
 
}

main()
  .catch(e => {
     console.error(e);
     process.exit(1);

   })
   .finally(async () => {
     await prisma.$disconnect();
   });




