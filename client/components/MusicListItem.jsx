import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cart'
import {
  deleteMusicAndState,
  updateMusicAndState,
  updateImageAndState,
} from '../actions/music'
import { actions } from '../permissions/constants.js'
import hasPermission from '../permissions/permissions.js'
import MusicFromModal from './MusicFormModal'

function MusicListItem({ product, setOpenCart, token }) {
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
      dispatch(deleteMusicAndState(product.id, token))
    }
  }

  // update function passed through to musicFormModal
  const handleUpdate = (e, imageFile, musicInfo) => {
    e.preventDefault()
    dispatch(updateMusicAndState(musicInfo, token))
    if (imageFile) {
      dispatch(updateImageAndState(imageFile, product.id, token))
    }

    // potentially send and index to reference if image is replacing image 1 or 2 (if using splice)

    setOpenUpdateModal(false)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div className="product">
        <div className="product_image-container">
          {product.image_path[0] && (
            <img
              src={product.image_path[0]}
              alt=""
              className="product__image"
              onMouseEnter={(e) => handleImage(e)}
              onMouseLeave={(e) => handleImageReset(e)}
              loading="lazy"
            />
          )}
        </div>
        <p className="product__info product__album">
          {product?.album}{' '}
          <span className="product__year">{product?.year}</span>
        </p>
        <p className="product__info" data-testid="artist">
          {product?.artist}
        </p>
        <p className="product__info">{capitalizeFirstLetter(product?.genre)}</p>
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
        <MusicFromModal
          product={product}
          openModalFn={setOpenUpdateModal}
          handleSubmit={handleUpdate}
        />
      )}
    </>
  )
}

export default MusicListItem
