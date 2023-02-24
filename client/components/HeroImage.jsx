import React from 'react'

export default function HeroImage() {
  return (
    <section className="hero__image-container">
      <picture>
        <source srcSet="/images/website/hero.webp" media="(min-width: 600px)" />
        <img
          className="hero__image"
          src="/images/website/hero-mobile.jpg"
          alt="records and headphones"
        />
      </picture>
      <h1 className="hero__title">The Lost Crates.</h1>
    </section>
  )
}
