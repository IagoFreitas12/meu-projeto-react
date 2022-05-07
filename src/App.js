
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Event';
import Form from './components/Form';
import Conditional from './components/Conditional';
import OutraLista from './components/OutraLista';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Home from './Pages/Home'
//import Empresa from './Pages/Empresa'
//import Contato from './Pages/Contato'
// import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './App.css';



function App() {

  const url = "https://via.placeholder.com/150"
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <h1>Testando Eventos</h1>
      <Pessoa 
        nome="Rodrigo" idade="29" 
        profissao="Desenvolvedor" foto={url}
      />
      <Form/>
      <Evento/>
      <List/>
      <SayMyName nome="Iago" />
      <Conditional/>

      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>

      <Footer/>      
    </div>  
  )
}

export default App;
