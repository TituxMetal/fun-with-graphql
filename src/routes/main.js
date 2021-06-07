import { Router } from 'express'

const router = new Router()

router.get('/', async (_req, res) =>
  res.json({
    name: 'fun-with-graphql',
    description: 'Having fun with GraphQL',
    url: 'https://github.com/TituxMetal/fun-with-graphql'
  })
)

router.get('/funs', async (req, res) => {
  const data = await getByKey('funs')
  const count = data.length
  const response = { data, count, message: 'ok', status: '200 OK' }

  return res.status(200).json(response)
})

export default router
