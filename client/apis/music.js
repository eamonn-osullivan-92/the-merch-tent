import request from 'superagent'

const rootUrl = '/api/v1'

export function getMusic() {
  return request.get(rootUrl + '/music').then((res) => {
    return res.body.music
  })
}
