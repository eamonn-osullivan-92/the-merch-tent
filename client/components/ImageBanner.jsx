import React from 'react'

export default function ImageBanner() {
  return (
    <div className="image-banner">
      <img
        src="/images/website/banner-image-1.jpg"
        alt="Shop"
        className="image-banner__image"
      />
      <img
        src="/images/website/banner-image-2.jpg"
        className="image-banner__image"
        alt="records"
      />
    </div>
  )
}
