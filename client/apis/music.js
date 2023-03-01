import request from 'superagent'

const rootUrl = '/api/v1/music'

export async function getMusic() {
  try {
    const res = await request.get(rootUrl + '/albumimages')
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function updateMusicItem(objToUpdate) {
  try {
    const res = await request.put(rootUrl + '/edit').send(objToUpdate)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendImage(image, product_id) {
  try {
    const res = await request
      .post(rootUrl + `/upload/${product_id}`)
      .attach('image', image)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function deleteMusicItem(id) {
  try {
    const res = await request.del(rootUrl + '/delete').send({ id })
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}
