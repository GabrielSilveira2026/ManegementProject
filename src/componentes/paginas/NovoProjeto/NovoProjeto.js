import { useNavigate } from 'react-router-dom' 
import ProjetoForm from '../../projeto/Form/ProjetoForm';
import styles from './NovoProjeto.module.css';

function NovoProjeto() {

  const navigate = useNavigate()

  function createPost(projeto) {
    //initizalize cost and services
    projeto.custos = 0
    projeto.servicos = []

    fetch("http://localhost:5000/projetos",{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projeto)
    })
    .then((resposta)=>resposta.json())
    .then((dados) => {
      console.log(dados)
      navigate('/projetos', {state: { mensagem: 'Projeto criado com sucesso' }})
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.novo_projeto_container}>
      <h1>Criar Projeto</h1>
      <p>Vamos criar seu projeto e depois podemos adicionar os serviços!</p>
      <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </div>
  )
}

export default NovoProjeto