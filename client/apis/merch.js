import request from 'superagent'

const rootUrl = '/api/v1/merchandise'

export async function getMerch() {
  try {
    const res = await request.get(rootUrl + '/itemsimages')
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendNewMerch(newItem) {
  try {
    const res = await request.post(rootUrl + '/add').send(newItem)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendDelMerch(id) {
  try {
    const res = await request.del(rootUrl + '/del').send(id)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendUpdatedMerch(updatedItem) {
  try {
    const res = await request.patch(rootUrl + '/update').send(updatedItem)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}
