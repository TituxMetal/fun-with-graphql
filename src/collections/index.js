import { getCollection } from '#root/database'

export const getByKey = async (collectionName, key = null) => {
  const collection = await getCollection(collectionName)
  const allData = await collection.find({ key }).toArray()
  const data = allData.map(({ _id, ...rest }) => ({ id: _id, ...rest }))

  return data
}

export const createDocument = async (collectionName, data = {}) => {
  const collection = await getCollection(collectionName)
  const newDocument = await collection.insertOne(data)

  return newDocument
}
