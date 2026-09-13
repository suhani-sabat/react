import './App.css'
import AddPerson from './components/AddPerson'
import ExpenseAdder from './components/ExpenseAdder'
import ExpenseList from './components/ExpenseList'
import People from './components/People'

function App() {
  

  return (
    <>
      <h1>Hello</h1>
      <AddPerson/>
      <People/>
      <ExpenseAdder/>
      <ExpenseList/>
    </>
  )
}

export default App
