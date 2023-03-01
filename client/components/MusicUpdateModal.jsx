import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FileUploader } from 'react-drag-drop-files'
import { updateMusicAndState, updateImageAndState } from '../actions/music.js'

export default function MusicUpdateModal({ setOpenUpdateModal, product }) {
  const dispatch = useDispatch()
  const { image_path, ...rest } = product
  const [imageFile, setImageFile] = useState(null)
  const [updateInfo, setUpdateInfo] = useState(rest)

  const handleInfoChange = (e) => {
    setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value })
  }

  const handleChange = (file) => {
    setImageFile(file)
  }

  const imageOptions = {
    lablel: 'Drag and drop album art here to upload',
    required: true,
    multiple: true,
    types: ['png', 'jpeg', 'jpg', 'webp'],
    onTypeError: (err) => console.log(err),
    handleChange: handleChange,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateMusicAndState(updateInfo))
    if (imageFile) dispatch(updateImageAndState(imageFile, product.id))

    setOpenUpdateModal(false)
  }

  return (
    <div className="update-modal-blur">
      <div className="update-modal__modal">
        <div className="update-modal__heading">
          <h3 className="update-modal-title">Update Product:</h3>
          <button
            className="update-modal__close"
            onClick={() => setOpenUpdateModal(false)}
          >
            &times;
          </button>
        </div>

        <FileUploader {...imageOptions} />

        <form action="" className="update-modal__form" onSubmit={handleSubmit}>
          <div className="update-modal__input-control">
            <label htmlFor="artist" className="update-modal__label">
              Artist:
            </label>
            <input
              type="text"
              className="update-modal__input"
              id="artist"
              name="artist"
              onChange={handleChange}
              defaultValue={product.artist}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="album" className="update-modal__label">
              Album:
            </label>
            <input
              type="text"
              className="update-modal__input"
              id="album"
              name="album"
              onChange={handleInfoChange}
              defaultValue={product.album}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="year" className="update-modal__label">
              Year:
            </label>
            <input
              type="text"
              className="update-modal__input"
              id="year"
              name="year"
              onChange={handleInfoChange}
              defaultValue={product.year}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="genre" className="update-modal__label">
              Genre:
            </label>
            <input
              type="text"
              className="update-modal__input"
              id="genre"
              name="genre"
              onChange={handleInfoChange}
              defaultValue={product.genre}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="price" className="update-modal__label">
              Price:
            </label>
            <input
              type="number"
              className="update-modal__input"
              id="price"
              name="price"
              onChange={handleInfoChange}
              defaultValue={product.price}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="quantity" className="update-modal__label">
              Quantity:
            </label>
            <input
              type="number"
              className="update-modal__input"
              id="quantity"
              name="quantity"
              onChange={handleInfoChange}
              defaultValue={product.quantity}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="stripe_product_id" className="update-modal__label">
              Stripe Product Id:
            </label>
            <input
              type="text"
              className="update-modal__input"
              id="stripe_product_id"
              name="stripe_product_id"
              onChange={handleInfoChange}
              defaultValue={product.stripe_product_id}
            />
          </div>
          <div className="update-modal__input-control">
            <label htmlFor="stripe_price_id" className="update-modal__label">
              Stripe Price Id:
            </label>
            <input
              type="text"
              className="update-modal__input"
              id="stripe_price_id"
              name="stripe_price_id"
              onChange={handleInfoChange}
              defaultValue={product.stripe_price_id}
            />
          </div>
          <button className="update-modal__submit btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
