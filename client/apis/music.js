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

export async function sendNewAlbum(newAlbum) {
  try {
    const res = await request.post(rootUrl + '/add').send(newAlbum)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendDelAlbum(id) {
  try {
    const res = await request.del(rootUrl + '/del').send(id)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}

export async function sendUpdatedAlbum(updatedAlbum) {
  try {
    const res = await request.patch(rootUrl + '/update').send(updatedAlbum)
    return res.body
  } catch (err) {
    console.error(err.message)
  }
}
