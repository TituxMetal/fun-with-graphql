import { Router } from 'express'

import { createDocument, getByKey } from '#root/collections'

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

router.post('/funs', async (req, res) => {
  const { title, power } = req.body

  if (!title || !power) {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'Title and power must be provided',
      status: 422
    })
  }

  if (typeof title !== 'string') {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'Title must be of type string',
      status: 422
    })
  }

  if (typeof power !== 'number') {
    return res.status(422).json({
      type: 'Validation Error',
      reason: 'Power must be of type number',
      status: 422
    })
  }

  const { insertedId } = await createDocument('funs', { title, power })
  const response = {
    data: { id: insertedId },
    message: 'Fun Created',
    status: '201 Created'
  }

  return res.status(201).json(response)
})

export default router
