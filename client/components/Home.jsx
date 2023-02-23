import React, { useRef, useState } from 'react'
import GenreHighlight from './GenreHighlight'
import Header from './Header'
import HeroImage from './HeroImage'
import ImageBanner from './ImageBanner'
import NewArrivals from './NewArrivals'

export default function Home({ setOpenCart, setSideNav }) {
  const [headerClass, setHeaderClass] = useState('header')
  const headerLocation = useRef()

  const stickHeader = () => {
    //sets background color when header sticks to top.
    const headerPos = headerLocation.current.getBoundingClientRect().top
    if (headerPos <= 0) {
      setHeaderClass(`header header--active`)
    } else {
      setHeaderClass('header')
    }
  }

  return (
    <div className="hero" onScroll={() => stickHeader()}>
      <HeroImage />
      <span ref={headerLocation}></span>
      <Header
        setOpenCart={setOpenCart}
        setSideNav={setSideNav}
        headerClass={headerClass}
      />

      <div className="parralax-bg">
        <NewArrivals />
        <ImageBanner />
        <GenreHighlight genre="hip-hop/rap" />
        <GenreHighlight genre="Indie/Alternative" />
        {/* BLOG/ARTICLES SECTION */}
      </div>
    </div>
  )
}
