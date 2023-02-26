import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '../hooks/useQuery'

// import { fetchMusic } from '../actions/music'

import MusicListItem from './MusicListItem'
import WaitIndicator from './WaitIndicator'

function MusicList({ setOpenCart }) {
  const music = useSelector((state) => state.music)
  let query = useQuery('genre')
  const [filterQuery, setFilterQuery] = useState(query)

  useEffect(() => {
    if (query) setFilterQuery(query)
    console.log(filterQuery)
  }, [query])

  return (
    <div className="store">
      <div className="store__grid">
        {filterQuery
          ? music
              ?.filter(
                (product) =>
                  product.genre.toLowerCase() == filterQuery.toLowerCase()
              )
              .map((product) => {
                return (
                  <MusicListItem
                    key={product.id}
                    product={product}
                    setOpenCart={setOpenCart}
                  >
                    <WaitIndicator />{' '}
                  </MusicListItem>
                )
              })
          : music?.map((product) => {
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
