import { useLocation } from 'react-router-dom';

import Mensagem from '../../layout/Mensagem/Mensagem';
import styles from './Projetos.module.css';

function Projetos() {
  const location = useLocation();

  let mensagem = ''
  if (location.state) {
    mensagem = location.state.mensagem
  }
  
  return (
    <div>
      <h1>Meus Projetos</h1>
      {mensagem && 
        <Mensagem tipo="sucesso" mensagem={mensagem}/>
      }
    </div>
  )
}

export default Projetos