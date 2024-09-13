import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div>
        <div className='text-3xl text-center mt-12 font-semibold'>List of All Todos</div>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
