import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '../hooks/useQuery'
import { actions } from '../permissions/constants.js'
import hasPermission from '../permissions/permissions.js'
import MusicFromModal from './MusicFormModal'
import { addMusicAndState } from '../actions/music'

import MusicListItem from './MusicListItem'
import WaitIndicator from './WaitIndicator'

function MusicList({ setOpenCart, token }) {
  const user = useSelector((state) => state.user)
  const music = useSelector((state) => state.music)
  const dispatch = useDispatch()
  let query = useQuery('genre')
  const filter = useRef()
  const genres = [...new Set(music.map((product) => product.genre))]
  const [filteredMusic, setFilteredMusic] = useState(music)
  const [openNewProductModal, setOpenNewProductModal] = useState(false)

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
    filter.current.value = ''
    setFilteredMusic(search)
  }

  const handleAddMusic = (e, imageFile, musicInfo) => {
    e.preventDefault()
    dispatch(addMusicAndState(musicInfo, imageFile, token))
    setOpenNewProductModal(false)
  }

  useEffect(() => {
    if (query) {
      setFilteredMusic(music.filter((product) => product.genre == query))
    } else {
      setFilteredMusic(music)
    }
  }, [music])

  return (
    <>
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
            className="store__filter"
            defaultValue={query ? query : ''}
            ref={filter}
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
          {hasPermission(user.role, actions.CREATE_PRODUCT) && (
            <div className="store__new-product">
              <button onClick={() => setOpenNewProductModal(true)}>
                <img
                  src="https://placehold.co/400x400/EEE/31343C?font=source-sans-pro&text=Add%20new%20product"
                  alt=""
                  className="store__new-product-image"
                />
              </button>
            </div>
          )}
          {music &&
            filteredMusic.map((product) => {
              return (
                <MusicListItem
                  key={product.id}
                  product={product}
                  setOpenCart={setOpenCart}
                  token={token}
                >
                  <WaitIndicator />{' '}
                </MusicListItem>
              )
            })}
        </div>
      </div>
      {openNewProductModal && (
        <MusicFromModal
          openModalFn={setOpenNewProductModal}
          handleSubmit={handleAddMusic}
        />
      )}
    </>
  )
}

export default MusicList
