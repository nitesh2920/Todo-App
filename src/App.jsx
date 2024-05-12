import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Todo from './components/Todo'

function App() {


  return (
    <Provider store={store} >
      <h1 className="text-5xl">HELLO JARVIS</h1>
      
        <Todo/>
        
    </Provider>
  )
}

export default App
