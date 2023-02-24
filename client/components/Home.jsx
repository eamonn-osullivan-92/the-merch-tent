import React, { useEffect, useRef, useState } from 'react'
import GenreHighlight from './GenreHighlight'
import Header from './Header'
import HeroImage from './HeroImage'
import ImageBanner from './ImageBanner'
import ImageBannerVert from './ImageBannerVert'
import NewArrivals from './NewArrivals'
import { useSessionStorage } from '../hooks/useSessionStorage'

export default function Home({ setOpenCart, setSideNav }) {
  const [headerClass, setHeaderClass] = useState('header')
  const headerLocation = useRef()
  const [firstLoad, setFirstLoad] = useSessionStorage('firstLoad', true)

  const stickHeader = () => {
    //sets background color when header sticks to top.
    const headerPos = headerLocation.current.getBoundingClientRect().top
    if (headerPos <= 0) {
      setHeaderClass(`header header--active`)
    } else {
      setHeaderClass('header')
    }
  }

  useEffect(() => {
    setFirstLoad(false)
  }, [])

  return (
    <div
      className={firstLoad ? 'hero fade' : 'hero'}
      onScroll={() => stickHeader()}
    >
      <HeroImage />
      <span ref={headerLocation}></span>
      <Header
        setOpenCart={setOpenCart}
        setSideNav={setSideNav}
        headerClass={headerClass}
      />

      <div className="parralax-bg">
        <NewArrivals />
        <ImageBannerVert />
        <GenreHighlight genre="hip-hop/rap" />
        <ImageBanner />
        <GenreHighlight genre="Indie/Alternative" />
        {/* BLOG/ARTICLES SECTION */}
      </div>
    </div>
  )
}
