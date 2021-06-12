import { ObjectID } from 'mongodb'

import { getCollection } from '#root/database'

export const getByKey = async (collectionName, key = null) => {
  const collection = await getCollection(collectionName)
  const allData = await collection.find(key).toArray()
  const data = allData.map(({ _id, ...rest }) => ({ id: _id, ...rest }))

  return key === null ? data : data[0]
}

export const getAllAndPopulate = async (collectionName, ref, collection) => {
  const allData = await getByKey(collectionName)

  const promise = allData.map(async document => {
    const refObjectId = ObjectID.createFromHexString(document[ref])
    const dataToPopulateWith = await getByKey(collection, { _id: refObjectId })

    return { ...document, [ref]: dataToPopulateWith }
  })

  const allPopulatedData = await Promise.all(promise)

  return allPopulatedData
}

export const createDocument = async (collectionName, data = {}) => {
  const collection = await getCollection(collectionName)
  const newDocument = await collection.insertOne(data)

  return newDocument
}
