import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cart'

function MusicListItem({ product, setOpenCart }) {
  const dispatch = useDispatch()
  console.log(product.image_path[1])

  const addAlbumToCart = (product) => {
    const { id, album, stripe_price_id } = product
    const newCartItem = { id, album, stripe_price_id }
    dispatch(addToCart(newCartItem))
    setOpenCart(true)
  }

  const handleImage = (e) => {
    if (product.image_path[1]) {
      e.target.src = product.image_path[1]
    }
  }

  const handleImageReset = (e) => {
    if (product.image_path[1]) {
      e.target.src = product.image_path[0]
    }
  }
  return (
    <div className="product">
      <img
        src={product?.image_path[0]}
        alt=""
        className="product__image"
        onMouseEnter={(e) => handleImage(e)}
        onMouseLeave={(e) => handleImageReset(e)}
        loading="lazy"
      />

      <p className="product__info product__album">
        {product?.album} <span className="product__year">{product?.year}</span>
      </p>
      <p className="product__info" data-testid="artist">
        {product?.artist}
      </p>
      <p className="product__info">{product?.genre}</p>
      <p className="product__info">${product?.price}</p>
      <div className="product__cart-control">
        <button
          className="btn btn-primary"
          data-testid="addToCartBtn"
          onClick={() => addAlbumToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MusicListItem
