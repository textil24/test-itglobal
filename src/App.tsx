import './App.css'
import HeaderBurger from './components/HeaderBurger/HeaderBurger'
import HeaderButton from './components/HeaderButton/HeaderButton'
import HeaderContent from './components/HeaderContent/HeaderContent'
import HeaderSelect from './components/HeaderSelect/HeaderSelect'

function App() {

  return (
    <div className="App">
      <HeaderBurger />
      <HeaderSelect />
      <HeaderButton type="next" view="first">
        Добавить
      </HeaderButton>
      <HeaderButton type="next" view="second">
        Добавить
      </HeaderButton>
      <HeaderButton type="next" view="zero">
        Добавить
      </HeaderButton>
      <HeaderButton type="prev" view="first">
        Добавить
      </HeaderButton>
      <HeaderButton type="prev" view="second">
        Добавить
      </HeaderButton>
      <HeaderContent title="Cloud consulting">
        Relational database services for MySQL, PostgreSQL, and SQL server.
      </HeaderContent>
    </div>
  )
}

export default App
