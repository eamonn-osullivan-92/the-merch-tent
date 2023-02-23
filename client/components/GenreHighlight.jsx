import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MusicListItem from './MusicListItem'
import { Link } from 'react-router-dom'
import { useIsSmall, useIsMed } from '../hooks/useMediaQuery'

export default function GenreHighlight({ genre }) {
  const music = useSelector((state) => state.music).sort(
    () => 0.5 - Math.random()
  )
  const [genreHighlights, setGenreHighlights] = useState([])
  const isSmall = useIsSmall()
  const isMed = useIsMed()

  const setHighlights = () => {
    //refreshes music (shuffles) if resizing window between breakpoints
    if (isSmall) {
      setGenreHighlights(
        music.filter((item) => item.genre == genre).slice(0, 2)
      )
    } else if (isMed) {
      setGenreHighlights(
        music.filter((item) => item.genre == genre).slice(0, 4)
      )
    } else {
      setGenreHighlights(
        music.filter((item) => item.genre == genre).slice(0, 5)
      )
    }
  }

  useEffect(() => {
    setHighlights()
  }, [music, isSmall, isMed])

  return (
    <section className="highlights">
      <div className="highlights__heading-flex">
        <div className="highlights__heading">Shop the latest {genre}</div>

        <button className="btn-tertiary ">
          <Link to="/store">Shop All </Link>
        </button>
      </div>
      <div className="highlights__flex">
        {music &&
          genreHighlights?.map((item) => (
            <MusicListItem product={item} key={item.id} />
          ))}
      </div>
    </section>
  )
}
