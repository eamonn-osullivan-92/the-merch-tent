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

export async function addMusicItem(objToAdd, token) {
  try {
    const res = await request
      .post(rootUrl + '/add')
      .send(objToAdd)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function updateMusicItem(objToUpdate, token) {
  try {
    const res = await request
      .put(rootUrl + '/edit')
      .send(objToUpdate)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendImage(image, product_id, token) {
  try {
    const res = await request
      .post(rootUrl + `/upload/${product_id}`)
      .attach('image', image)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function deleteMusicItem(id, token) {
  try {
    const res = await request
      .del(rootUrl + '/delete')
      .send({ id })
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}
