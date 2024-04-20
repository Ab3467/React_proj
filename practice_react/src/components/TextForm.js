import React,{useState} from 'react'

export default function TextForm(props) {
    const handleClick=()=> {
        setText(text.toUpperCase());
    }
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const [text,setText]= useState("Enter Text here")
   
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='mt-5'>{props.heading}</h1>
      <div className="ml-5 mt-5">
        <textarea className="mt-1 ml-1" name="form-control" value={text} onChange={handleChange} id="my-box" rows="20" cols="100"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleClick}>Convert to UpperCase</button>
    </div>
  )
}
