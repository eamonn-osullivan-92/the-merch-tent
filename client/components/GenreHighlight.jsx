import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MusicListItem from './MusicListItem'
import { Link } from 'react-router-dom'

export default function GenreHighlight({ genre }) {
  const music = useSelector((state) => state.music).sort(
    () => 0.5 - Math.random()
  )
  const [genreHighlights, setGenreHighlights] = useState([])

  const setHighlights = () => {
    setGenreHighlights(music.filter((item) => item.genre == genre).slice(0, 5))
  }

  useEffect(() => {
    setHighlights()
  }, [music])

  return (
    <section className="highlights">
      <div className="highlights__heading-flex">
        <div className="highlights__heading">Shop the latest {genre}</div>

        <button className="btn-tertiary ">
          <Link to="/store">Shop All </Link>
        </button>
      </div>
      <div className="highlights__flex">
        {genreHighlights &&
          genreHighlights?.map((item) => (
            <MusicListItem product={item} key={item.id} />
          ))}
      </div>
    </section>
  )
}
