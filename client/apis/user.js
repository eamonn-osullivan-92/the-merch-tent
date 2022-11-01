import request from 'superagent'

const rootUrl = '/api/v1/users'

export function addUser(user, token) {
  return request
    .post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .catch((err) => console.log(err.message))
}

export function getUser(email, token) {
  return request
    .get(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}
