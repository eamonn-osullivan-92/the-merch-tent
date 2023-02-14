import React from 'react'

function MusicListItem({ product, addAlbumToCart }) {
  return (
    <div className="product">
      <img src={product?.image_path[0]} alt="" className="image" />
      <p className="album">
        {product?.album} <span>{product?.year}</span>
      </p>
      <p className="artist" data-testid="artist">
        {product?.artist}
      </p>
      <p className="genre">{product?.genre}</p>
      <p className="price">${product?.price}</p>
      <div className="cart-control">
        <button
          className="btn btn-primary"
          onClick={() => addAlbumToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MusicListItem
