import { useState } from 'react'

const Textfrorms = () => {
    const [text, setText] = useState('Change To Uppercase');
    const [mode, setMode] = useState('Dark Mode On')
    const [wtext, setWtext] = useState('')
    const [change, setChange] = useState({
        backgroundColor: 'white' 
    })
    const [ctext, setCtext] = useState(null)

    
  return (
    <>
    <div className="form" style={change}>
    <div className="container" >
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         <h1 style={ctext}>TEXT UTILS APP </h1>
        </label>
        <textarea value={wtext} onChange={(e)=>{
            setWtext(e.target.value)
        }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="17"
        ></textarea>
      </div>
      <button onClick={()=>{
        if(text == 'Change To Uppercase') {
            setText('Change To Lowercase');
            let low =wtext.toUpperCase();
            setWtext(low);
        }
         else{
             setText('Change To Uppercase');
            let high= wtext.toLowerCase();
            setWtext(high) ;
        }
      }} className='btn btn-primary my-2'>{text}</button> 
      <button  className='btn btn-primary mx-2 '>Copy Text</button>
      <button onClick={()=>{
        setWtext(' ')
      }} className='btn btn-primary mx-2 '>Clear Text</button>
      
      <br />
      <button className='btn btn-primary my-2' onClick={()=>{
        if(mode == 'Dark Mode On'){
            setMode('Light Mode On')
            setChange({
              backgroundColor:'black'
                
            })
            setCtext({
                color:'white'
            })
        }
        else{
            setMode('Dark Mode On')
            setChange({
                backgroundColor:'white'
            })
            setCtext({
                color:'black'
            })
        }
      }}>{mode}</button>
      <h1 style={ctext}>Summary</h1>
      <p style={ctext}> Characters are {wtext.length}</p>
      <p style={ctext}>Read In {wtext.length * 0.008} minutes</p> 

    
      </div>
    </div>
      
    </>
  )
}

export default Textfrorms




