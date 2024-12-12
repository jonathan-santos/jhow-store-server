import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const routes = async (fastify, options) => {
  fastify.get('/', async (req, res) => {
    const users = await prisma.user.findMany()
    return users
  })

  fastify.post('/', async (req, res) => {
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io'
      }
    })

    fastify.log.info(user)
    
    return user
  })
}

export default routes
