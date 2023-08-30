import { useLocation } from 'react-router-dom';

import Mensagem from '../../layout/Mensagem/Mensagem';
import Container from '../../layout/Container/Container';
import styles from './Projetos.module.css';
import Loading from '../../layout/Loading/Loading';
import LinkButton from '../../layout/LinkButton/LinkButton';
import { useState, useEffect } from 'react';
import CartaoProjeto from '../../projeto/Cartao/CartaoProjeto';

function Projetos() {
  const location = useLocation();
  const [projetos, setProjetos] = useState([])

  const [removeLoading, setRemoveLoading] = useState(false)
  
  let mensagem = ''
  if (location.state) {
    mensagem = location.state.mensagem
  }
  
  useEffect(()=>{
    setTimeout(() => {
      fetch('http://localhost:5000/projetos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resposta) => resposta.json())
        .then((dados) => {
          setProjetos(dados)
          setRemoveLoading(true)
        })
        .catch((erro) => { console.log(erro); })
    }, 500)
  }, [])

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
        {
          projetos.length > 0 && 
          projetos.map((projeto)=>(
            <CartaoProjeto  
              key={projeto.id}
              id={projeto.id} 
              nome={projeto.nome} 
              orcamento={projeto.orcamento}
              categoria={projeto.categoria}
            />
          ))
        }
        {
          !removeLoading && <Loading/>
        }
        {
          removeLoading && projetos.length === 0 && (<p>Sem projetos cadastrados</p>)
        }
      </Container>
    </div>
  )
}

export default Projetos