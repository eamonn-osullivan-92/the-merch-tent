import nock from 'nock'

import { fetchMusic } from './music'

test('fetchMusic', () => {
  const expectedMusic = [
    {
      id: 1,
      artist: 'Avantdale Bowling Club',
      album: 'Trees',
      year: '2022',
      genre: 'hip-hop/rap',
      description: 'description',
      price: 47,
      quantity: '10',
    },
    {
      id: 2,
      artist: 'A Tribe Called Quest',
      album: 'Low End Theory',
      year: '1991',
      genre: 'hip-hop/rap',
      description: 'description',
      price: 60,
      quantity: '3',
    },
  ]

  const scope = nock('http://localhost')
    .get('/api/v1/music/albumimages')
    .reply(200, expectedMusic)

  const dispatch = jest.fn()

  return fetchMusic()(dispatch).then(() => {
    expect(dispatch.mock.calls).toHaveLength(2)
    console.log(dispatch.mock.calls[1][0])
    expect(dispatch.mock.calls[0][0].type).toBe('FETCH_MUSIC_PENDING')
    expect(dispatch.mock.calls[1][0].type).toBe('FETCH_MUSIC_SUCCESS')
    expect(dispatch.mock.calls[1][0].payload[1].album).toBe('Low End Theory')

    scope.done()
  })
})
