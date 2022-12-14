import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import Cors from "@fastify/cors";

const prisma = new PrismaClient({
    log:['query']
})

async function bootstrap () {
const fastify = Fastify({
    logger:true
})

await fastify.register(Cors,{
    origin:true
})

//http://localhost:3333

fastify.get('/pools/count', async () => {
   const count = await prisma.pool.count()

  return {count}  
})

await fastify.listen({port:3333,host: '0.0.0.0'})
}

bootstrap()