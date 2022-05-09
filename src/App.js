// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Evento from './components/Event';
// import Form from './components/Form';
// import Conditional from './components/Conditional';
// import OutraLista from './components/OutraLista';
//import {useState} from 'react'
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';
import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Empresa from './Pages/Empresa'
import Contato from './Pages/Contato'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {

  // const url = "https://via.placeholder.com/150"
  // const meusItens = ['React', 'Vue', 'Angular']
  // const [nome, setNome] = useState()

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Contato" element={<Contato/>}/>
        <Route path="/Empresa" element={<Empresa/>}/>
      </Routes> 
    </Router>
  )
}

export default App;
