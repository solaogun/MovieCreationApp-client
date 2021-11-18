import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './movieCreate.scss'

const initialState = {
  name: '',
  description: '',
  releaseDtate: '',
  rating: '',
  ticketPrice: '',
  country: '',
  genre: '',
  photo: '',


}

function MovieCreate() {
  const history = useHistory()
  const [movie, setMovie] = useState(initialState)

  const { name, description, releaseDate, rating, ticketPrice, country, genre, photo } = movie

  const handleChange = e => {
    const { name, value } = e.target
    setMovie({ ...movie, [name]: value })
  }

  const handleSubmit = () => {
    console.log("submit")
  }

  const handleGenreChange = () => {
    console.log('submit')
  }
  return (
    <div className='container'>
      <div className='p'>
        <p>Create Movie</p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name" className='label'>Name</label>
          <input
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Lord of the Rings" />
        </div>
        <div className="form-group">
          <label htmlFor="description" className='label'>Description</label>
          <input
            onChange={handleChange}
            value={description}
            name="description"
            type="text"
            className="form-control"
            id="description"
            placeholder="Somewhere in Middle-earth..." />
        </div>
        <div className="form-group">
          <label htmlFor="description" className='label'>Rating</label>
          <input
            onChange={handleChange}
            value={rating}
            name="rating"
            type="number"
            max="5"
            min="0"
            className="form-control"
            id="rating"
            placeholder="3" />
          <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
          <label htmlFor="image" className='label'>Photo</label>
          <input
            onChange={handleChange}
            value={photo}
            name="image"
            type="text"
            className="form-control"
            id="image"
            placeholder="http://....." />
        </div>
        {/* <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={cover}
          name="cover"
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......" />
      </div> */}
        {/* <div className="form-group">
          <label htmlFor="longDesc">Description</label>
          <textarea
            onChange={handleChange}
            value={longDesc}
            name="long description"
            className="form-control"
            id="longDesc"
            rows="3"></textarea>
        </div> */}
        <div className="form-group">
          <label htmlFor="genre" className='label'>Genre</label>
          <select
            className='select'
            onChange={handleGenreChange}
            multiple className="form-control"
            id="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>
        <div>
          <button className='button' onClick={() => history.push('/')} >Submit</button>
        </div>

      </form>

    </div>
  )
}

export default MovieCreate
