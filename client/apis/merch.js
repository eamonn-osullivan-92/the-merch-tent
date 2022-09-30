import request from 'superagent'

const rootUrl = '/api/v1'

export function getMerch() {
  return request.get(rootUrl + '/merchandise').then((res) => {
    return res.body.merchandise
  })
}
