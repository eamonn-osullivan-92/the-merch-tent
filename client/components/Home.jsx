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
  const [fade, setFade] = useState(false)

  const stickHeader = () => {
    //sets background color when header sticks to top.
    const headerPos = headerLocation.current.getBoundingClientRect().top
    if (headerPos <= 0) {
      setHeaderClass(`header header--active`)
    } else {
      setHeaderClass('header')
    }
  }

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setFade(true)
    }

    // Check if the page has already loaded
    if (firstLoad) {
      if (document.readyState === 'complete') {
        onPageLoad()
      } else {
        window.addEventListener('load', onPageLoad)
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad)
      }
      setFirstLoad(false)
    }
  }, [])

  return (
    <div className={fade ? 'hero fade' : 'hero'} onScroll={() => stickHeader()}>
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
