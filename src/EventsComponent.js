import React from 'react'

export const EventsComponent = () => {

    const handleClick = (e) => {
        alert('hola, soy un evento')
    }

  return (
    <div>
        <h2>Eventos en react</h2>
        <button onClick={handleClick}>Click me! </button>
    </div>

  )
}
