import React, { useRef, useState, useEffect } from 'react'
import GenreHighlight from './GenreHighlight'
import Header from './Header'
import HeroImage from './HeroImage'
import NewArrivals from './NewArrivals'

export default function Home({ setOpenCart, setSideNav }) {
  const [headerClass, setHeaderClass] = useState('header')
  const headerLocation = useRef()

  const stickHeader = (e) => {
    console.log(e.target.scrollTop)
    //sets background color when header sticks to top.
    const headerPos = headerLocation.current.getBoundingClientRect().top
    if (headerPos <= 0) {
      setHeaderClass(`header header--active`)
    } else {
      setHeaderClass('header')
    }
    console.log(headerClass)
  }

  return (
    <div className="hero" onScroll={(e) => stickHeader(e)}>
      <HeroImage />
      <span ref={headerLocation}></span>
      <Header
        setOpenCart={setOpenCart}
        setSideNav={setSideNav}
        headerClass={headerClass}
      />

      <div className="parralax-bg">
        <NewArrivals />
        <GenreHighlight genre="hip-hop/rap" />
        <GenreHighlight genre="Indie/Alternative" />
        {/* BLOG/ARTICLES SECTION */}
      </div>
    </div>
  )
}
