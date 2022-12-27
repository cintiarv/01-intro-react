import React from 'react'

export const EventsComponent = () => {

    const handleClick = (e) => {
        alert('hola, soy un evento')
    }

    const handleDoubleClick = (e) => {
      alert('you clicked me twice!')
    }
    const handleHover = (e, action) => {
      alert('Youve' +' '+ action)
    }
    const youreIn = (e) => {
console.log('youre in input write your name')
    }
    const youreOut = (e) => {
      console.log('youre out')
    }
   
  return (
    <div>
        <h2>Eventos en react</h2>
        <button onClick={handleClick}>Click me! </button>
        <button onDoubleClick={handleDoubleClick} >Double click me</button>
    <div id="box" 
    onMouseEnter={e => handleHover(e, 'entered')}
    onMouseLeave={e => handleHover(e, 'leaved')}>
    Hover me!
    </div>
    <p>
      <input type="text" 
      onFocus={youreIn} 
      onBlur={youreOut}
      placeholder="Enter your name" />
    </p>
    </div>

  )
}
