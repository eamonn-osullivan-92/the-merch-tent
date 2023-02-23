import React from 'react'
import { useSelector } from 'react-redux'

// import { fetchMusic } from '../actions/music'

import MusicListItem from './MusicListItem'
import WaitIndicator from './WaitIndicator'

function MusicList({ setOpenCart }) {
  const music = useSelector((state) => state.music)

  return (
    <div className="store">
      <div className="store__grid">
        {music &&
          music.map((product) => {
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
