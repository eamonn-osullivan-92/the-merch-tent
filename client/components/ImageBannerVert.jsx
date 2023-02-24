import React from 'react'

export default function ImageBannerVert() {
  return (
    <div className="image-banner--vert">
      <img
        src="/images/website/banner-vert-1.webp"
        alt="Shop"
        className="image-banner__image"
        loading="lazy"
      />
      <img
        src="/images/website/banner-vert-2.webp"
        className="image-banner__image"
        alt="record player"
        loading="lazy"
      />
      <img
        src="/images/website/banner-vert-3.webp"
        className="image-banner__image"
        alt="records"
        loading="lazy"
      />
    </div>
  )
}
