import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MusicListItem from './MusicListItem'

export default function NewArrivals() {
  const music = useSelector((state) => state.music)
  const [newArrivals, setNewArrivals] = useState([])

  const randomizeNewArrivals = () => {
    const newMusic = music?.sort(() => 0.5 - Math.random()).slice(0, 3)
    setNewArrivals(newMusic)
  }

  useEffect(() => {
    randomizeNewArrivals()
  }, [music])

  return (
    <section className="highlights">
      <div className="highlights__heading">New Arrivals</div>
      <div className="highlights__flex">
        {music &&
          newArrivals?.map((item) => (
            <MusicListItem product={item} key={item.id} />
          ))}
      </div>
      <Link to="/store">
        <button className="highlights__btn">Shop All</button>
      </Link>
    </section>
  )
}
