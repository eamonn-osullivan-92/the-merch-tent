import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const defaultProduct = {
  artist: '',
  album: '',
  year: '',
  genre: '',
  price: 0,
  quantity: 0,
  stripe_product_id: '',
  stripe_price_id: '',
  image_path: [],
}

export default function MusicFormModal({
  openModalFn,
  product = defaultProduct,
  handleSubmit,
}) {
  // eslint-disable-next-line no-unused-vars
  const { image_path, ...rest } = product
  const [imageFile, setImageFile] = useState(null)
  const [musicInfo, setMusicInfo] = useState(rest)

  const handleInfoChange = (e) => {
    setMusicInfo({ ...musicInfo, [e.target.name]: e.target.value })
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

  return (
    <div className="modal-blur">
      <div className="modal__modal">
        <div className="modal__heading">
          <h3 className="modal-title">
            {product == defaultProduct ? 'Add Product:' : 'Update Product:'}
          </h3>
          <button className="modal__close" onClick={() => openModalFn(false)}>
            &times;
          </button>
        </div>

        <FileUploader {...imageOptions} />

        <form
          action=""
          className="modal__form"
          onSubmit={(e) => handleSubmit(e, imageFile, musicInfo)}
        >
          <div className="modal__input-control">
            <label htmlFor="artist" className="modal__label">
              Artist:
            </label>
            <input
              type="text"
              className="modal__input"
              id="artist"
              name="artist"
              onChange={handleInfoChange}
              defaultValue={product.artist}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="album" className="modal__label">
              Album:
            </label>
            <input
              type="text"
              className="modal__input"
              id="album"
              name="album"
              onChange={handleInfoChange}
              defaultValue={product.album}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="year" className="modal__label">
              Year:
            </label>
            <input
              type="text"
              className="modal__input"
              id="year"
              name="year"
              onChange={handleInfoChange}
              defaultValue={product.year}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="genre" className="modal__label">
              Genre:
            </label>
            <input
              type="text"
              className="modal__input"
              id="genre"
              name="genre"
              onChange={handleInfoChange}
              defaultValue={product.genre}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="price" className="modal__label">
              Price:
            </label>
            <input
              type="number"
              className="modal__input"
              id="price"
              name="price"
              min="0"
              onChange={handleInfoChange}
              defaultValue={product.price}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="quantity" className="modal__label">
              Quantity:
            </label>
            <input
              type="number"
              className="modal__input"
              id="quantity"
              name="quantity"
              min="0"
              onChange={handleInfoChange}
              defaultValue={product.quantity}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="stripe_product_id" className="modal__label">
              Stripe Product Id:
            </label>
            <input
              type="text"
              className="modal__input"
              id="stripe_product_id"
              name="stripe_product_id"
              onChange={handleInfoChange}
              defaultValue={product.stripe_product_id}
            />
          </div>
          <div className="modal__input-control">
            <label htmlFor="stripe_price_id" className="modal__label">
              Stripe Price Id:
            </label>
            <input
              type="text"
              className="modal__input"
              id="stripe_price_id"
              name="stripe_price_id"
              onChange={handleInfoChange}
              defaultValue={product.stripe_price_id}
            />
          </div>
          <button className="modal__submit btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
