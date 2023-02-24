import React from 'react'

export default function ImageBanner() {
  return (
    <div className="image-banner">
      <img
        src="/images/website/banner-image-1.webp"
        alt="Shop"
        className="image-banner__image"
        loading="lazy"
      />
      <img
        src="/images/website/banner-image-2.webp"
        className="image-banner__image"
        alt="records"
        loading="lazy"
      />
    </div>
  )
}
