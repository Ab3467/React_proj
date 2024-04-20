import React from 'react'

export default function TextForm() {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea name="form-control" id="my-box" rows="8"></textarea>
      </div>
      <button className='btn btn-primary'>Convert to UpperCase</button>
    </div>
  )
}
