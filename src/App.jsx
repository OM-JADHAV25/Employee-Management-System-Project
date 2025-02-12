import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* path='/' corresponds to http://localhost:3000(port) */}
      <Route path='/' element={<ListEmployeeComponent />}></Route>
      {/* path='/employees' corresponds to http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent />}></Route>
      {/* path='/add-employee' corresponds to http://localhost:3000/add-employee */}
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
      {/* path='/edit-employee/:id' corresponds to http://localhost:3000/edit-employee/:id */}
      <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
    </Routes>
    <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
