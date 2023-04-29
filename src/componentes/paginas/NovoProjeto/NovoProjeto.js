import ProjetoForm from '../../projeto/ProjetoForm';
import styles from './NovoProjeto.module.css';

function NovoProjeto() {
  return (
    <div className={styles.novo_projeto_container}>
      <h1>Criar Projeto</h1>
      <p>Vamos criar seu projeto e depois adicionar serviços!</p>
      <ProjetoForm/>
    </div>
  )
}

export default NovoProjeto