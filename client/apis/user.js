import request from 'superagent'

const rootUrl = '/api/v1/users'

export function addUser(user, token) {
  return request
    .post(`${rootUrl}/adduser`)
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .catch((err) => console.log(err.message))
}

export function getUser(token) {
  return request
    .get(`${rootUrl}/`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}
