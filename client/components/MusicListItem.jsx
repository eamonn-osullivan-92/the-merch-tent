import React from 'react'

function MusicListItem({ children, product, addAlbumToCart }) {
  return (
    <div className="product">
      {children} {/* wait indicator */}
      <img src={product.image_path[0]} alt="" className="image" />
      <p className="album">
        {product.album} {product.year}
      </p>
      <p className="artist">{product.artist}</p>
      <p className="genre">{product.genre}</p>
      <p className="price">${product.price}</p>
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
