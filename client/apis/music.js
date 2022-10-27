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
