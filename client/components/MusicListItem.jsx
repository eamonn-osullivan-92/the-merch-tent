import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cart'
import { deleteMusicAndState } from '../actions/music'
import { actions } from '../permissions/constants.js'
import hasPermission from '../permissions/permissions.js'
import MusicUpdateModal from './MusicUpdateModal'

function MusicListItem({ product, setOpenCart }) {
  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [openUpdateModal, setOpenUpdateModal] = useState(false)

  const getProductCartQuantity = () => {
    return cart.find((item) => item.id == product.id)?.quantity || 0
  }

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

  const handleDelete = () => {
    if (user.role == 'admin') {
      console.log(product.id)
      dispatch(deleteMusicAndState(product.id))
    }
  }

  return (
    <>
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
          {product?.album}{' '}
          <span className="product__year">{product?.year}</span>
        </p>
        <p className="product__info" data-testid="artist">
          {product?.artist}
        </p>
        <p className="product__info">{product?.genre}</p>
        <p className="product__info">${product?.price}</p>

        <div className="product__cart-control">
          {getProductCartQuantity() === 0 ? (
            <button
              className="btn btn-primary"
              data-testid="addToCartBtn"
              onClick={() => addAlbumToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="btn btn-primary"
              data-testid="addToCartBtn"
              onClick={() => addAlbumToCart(product)}
            >
              {getProductCartQuantity()} in Cart
            </button>
          )}

          {hasPermission(user.role, actions.MODIFY_PRODUCT) && (
            <div className="product__admin-control">
              <button
                className="product__admin-edit btn-secondary"
                onClick={() => setOpenUpdateModal(true)}
              >
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button
                className="product__admin-delete btn-secondary"
                onClick={() => handleDelete()}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {openUpdateModal && (
        <MusicUpdateModal
          product={product}
          openUpdateModal={openUpdateModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      )}
    </>
  )
}

export default MusicListItem
