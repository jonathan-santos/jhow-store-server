const routes = async (fastify, options) => {
  fastify.get('/', async (req, res) => {
    return { hello: 'there' }
  })
}

export default routes
