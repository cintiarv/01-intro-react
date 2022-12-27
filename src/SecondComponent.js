import React from 'react'

export const SecondComponent = () => {
  const colors = ['red', 'blue', 'pink']

  return (
    <>
      <div>SecondComponent</div>
      <div>
        <h3>Colors</h3>
        <ul>
          <li>{colors[0]}</li>
          <li>{colors[1]}</li>
          <li>{colors[2]}</li>
        </ul>
        <h3>JS function</h3>
        {colors.length >= 1
          ? (<ul>
              {
              colors.map((color, index) => {
                return <li key={index}>{color}</li>
              })
          }
            </ul>)
          : (<p>No hay colors</p>)
            }

      </div>
    </>
  )
}
