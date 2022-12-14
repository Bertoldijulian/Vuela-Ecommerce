import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ComponentContainer from './components/ComponentContainer/ComponentContainer'


function App() {


  return (
    <BrowserRouter>
    
      <div className="App">
        <NavBar/>
          <Routes>
            <Route index to='/' element={<ComponentContainer/>} />
            <Route index to='/' element={<ItemListContainer/>} />
            <Route to='/categoria/callerasypouch/:callerasId' element={<ItemListContainer/>} />
            <Route to='/categoria/remeras/:id' element={<ItemDetailContainer/>} />
          </Routes>
      </div>
      
      
    </BrowserRouter>
  )
}

export default App
