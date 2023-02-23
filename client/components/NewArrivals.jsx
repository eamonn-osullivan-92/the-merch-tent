import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MusicListItem from './MusicListItem'
import { useIsSmall, useIsMed } from '../hooks/useMediaQuery'

export default function NewArrivals() {
  const music = useSelector((state) => state.music).sort(
    () => 0.5 - Math.random()
  )
  const [newArrivals, setNewArrivals] = useState([])
  const isSmall = useIsSmall()
  const isMed = useIsMed()

  const setHighlights = () => {
    //refreshes music (shuffles) if resizing window between breakpoints
    if (isSmall) {
      setNewArrivals(music.slice(0, 2))
    } else if (isMed) {
      setNewArrivals(music.slice(0, 4))
    } else {
      setNewArrivals(music.slice(0, 5))
    }
  }

  useEffect(() => {
    setHighlights()
  }, [music, isSmall, isMed])

  return (
    <section className="highlights">
      <div className="highlights__heading-flex">
        <div className="highlights__heading">New Arrivals</div>

        <button className="btn-tertiary ">
          <Link to="/store">Shop All </Link>
        </button>
      </div>

      <div className="highlights__flex">
        {music &&
          newArrivals?.map((item) => (
            <MusicListItem product={item} key={item.id} />
          ))}
      </div>
    </section>
  )
}
