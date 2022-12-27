import React from 'react'
import PropTypes from 'prop-types'

export const ThirdComponent = ({name, lastName, ficha}) => {
  return (
    <div>
        <h1> Comunicación entre componentes </h1>
        <ul>
            <li>{name}</li>
            <li>{lastName}</li>
            <li>{ficha.blood}</li>
            <li>{ficha.alergies}</li>
        </ul>
    </div>
  )
}

ThirdComponent.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    ficha: PropTypes.object,
} 

ThirdComponent.defaultProps = {
    name: 'cin',
    lastName: 'ruiz'
}