import { useLocation } from 'react-router-dom';

import Mensagem from '../../layout/Mensagem/Mensagem';
import Container from '../../layout/Container/Container';
import styles from './Projetos.module.css';
import LinkButton from '../../layout/LinkButton/LinkButton';

function Projetos() {
  const location = useLocation();

  let mensagem = ''
  if (location.state) {
    mensagem = location.state.mensagem
  }
  
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novoProjeto" text="Criar Projeto"/>
      </div>
      {mensagem && 
        <Mensagem tipo="sucesso" mensagem={mensagem}/>
      }
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  )
}

export default Projetos