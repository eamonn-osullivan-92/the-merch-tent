import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MusicListItem from './MusicListItem'
import { Link } from 'react-router-dom'

export default function GenreHighlight({ genre }) {
  const music = useSelector((state) => state.music)
  const [genreHighlights, setgenreHighlights] = useState([])

  const randomizeGenreHighlights = () => {
    const newMusic = music
      ?.filter((item) => item.genre == genre)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    setgenreHighlights(newMusic)
  }

  useEffect(() => {
    randomizeGenreHighlights()
  }, [music])

  return (
    <section className="highlights">
      <div className="highlights__heading">Shop the latest {genre}</div>
      <div className="highlights__flex">
        {music &&
          genreHighlights?.map((item) => (
            <MusicListItem product={item} key={item.id} />
          ))}
      </div>
      <Link to="/store">
        <button className="highlights__btn">Shop All</button>
      </Link>
    </section>
  )
}
