import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componentes/paginas/Home/Home';
import Contato from './componentes/paginas/Contato/Contato';
import NovoProjeto from './componentes/paginas/NovoProjeto/NovoProjeto';
import Empresa from './componentes/paginas/Empresa/Empresa';
import Container from './componentes/layout/Container/Container';
import NavBar from './componentes/layout/NavBar/NavBar'
import Footer from './componentes/layout/Footer/Footer'
import Projetos from './componentes/paginas/Projetos/Projetos';

function App() {
  return (
    <Router>
      <NavBar></NavBar>

      <Container customClass='min-height'>
        <Routes>
            <Route path="/" 
              element={<Home/>}/>

            <Route path="/empresa"
              element={<Empresa/>}/>

            <Route path="/projetos"
              element={<Projetos/>}/>

            <Route path="/contato"
              element={<Contato/>}/>
            
            <Route path="/novoprojeto"
              element={<NovoProjeto/>}/>
        </Routes>
      </Container>

      <Footer/>

    </Router>
  );
}

export default App;
