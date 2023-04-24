import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './componentes/paginas/Home';
import Contato from './componentes/paginas/Contato';
import NovoProjeto from './componentes/paginas/NovoProjeto';
import Empresa from './componentes/paginas/Empresa';
import Container from './componentes/layout/Container/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/companhia">Empresa</Link>
        <Link to="/novoprojeto">Novo Projeto</Link>
      </ul>

      <Container customClass='min-height'>
        <Routes>
            <Route path="/" 
              element={<Home/>}/>

            <Route path="/companhia"
              element={<Empresa/>}/>

            <Route path="/contato"
              element={<Contato/>}/>
            
            <Route path="/novoprojeto"
              element={<NovoProjeto/>}/>
        </Routes>
      </Container>

      <p>Footer</p>

    </Router>
  );
}

export default App;
