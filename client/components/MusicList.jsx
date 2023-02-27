import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '../hooks/useQuery'

// import { fetchMusic } from '../actions/music'

import MusicListItem from './MusicListItem'
import WaitIndicator from './WaitIndicator'

function MusicList({ setOpenCart }) {
  const music = useSelector((state) => state.music)
  let query = useQuery('genre')
  const genres = [...new Set(music.map((product) => product.genre))]
  const [filteredMusic, setFilteredMusic] = useState(music)

  const handleFilter = (e) => {
    if (!e.target.value) {
      setFilteredMusic(music)
    } else {
      setFilteredMusic(
        music.filter((product) => product.genre == e.target.value)
      )
    }
  }

  const handleSearch = (e) => {
    let search = music.filter((product) => {
      return Object.keys(product).some((key) => {
        if (key == 'artist' || key == 'album' || key == 'genre') {
          return product[key]
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        }
      })
    })
    setFilteredMusic(search)
  }

  useEffect(() => {
    if (query) {
      setFilteredMusic(music.filter((product) => product.genre == query))
    } else {
      setFilteredMusic(music)
    }
  }, [music])

  return (
    <div className="store">
      <div className="store__controller">
        <div className="store__search-control">
          <input
            type="text"
            className="store__search"
            placeholder="Search"
            onChange={(e) => handleSearch(e)}
          />
          <span className="material-symbols-outlined store__search-icon">
            search
          </span>
        </div>
        <select
          name="genre"
          id="genre"
          onChange={(e) => handleFilter(e)}
          value={query ? query : undefined}
          className="store__filter"
        >
          <option value="">Filter</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="store__grid">
        {music &&
          filteredMusic.map((product) => {
            return (
              <MusicListItem
                key={product.id}
                product={product}
                setOpenCart={setOpenCart}
              >
                <WaitIndicator />{' '}
              </MusicListItem>
            )
          })}
      </div>
    </div>
  )
}

export default MusicList
