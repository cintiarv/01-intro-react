import './App.css'
import Component from './Component'
import { EventsComponent } from './EventsComponent'
import { SecondComponent } from './SecondComponent'
import { ThirdComponent } from './ThirdComponent'

function App () {
  const fichaMedica = {
    height: '155cm',
    blood: 'A-',
    alergies: 'none'
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <p>
            Welcome to react!
          </p>
          <Component />
          <hr />
          <SecondComponent />
          {/* Cualquier ejecución de JS se pone dentro de llaves  */}
          <hr />
          <ThirdComponent
          name = 'cin'
          lastName = 'ruiz'
          ficha = {fichaMedica}
          />
          <hr />
          <EventsComponent />
        </div>
      </header>
    </div>
  )
}

export default App
