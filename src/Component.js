// Importar modulo de react/dependencias
import React from 'react' // buenas prácticas

// Función del componente
const Component = () => {
  const usuario = {
    name: 'cin',
    apellido: 'ruiz',
    web: 'cin.es'
  }

  return (
    <>
      <hr />
      <p>hola que ondas</p>
      <ul>
        <li>
          Name: {usuario.name}
        </li>
        <li>
          Apellido: {usuario.apellido}
        </li>
        <li>
          Web: {usuario.web}
        </li>
      </ul>
      <br />
    </>
  )
}

export default Component
