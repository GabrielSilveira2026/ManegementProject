import styles from './Home.module.css';
import savings from '../../../img/saving.png';
import LinkButton from '../../layout/LinkButton/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>Manegement Project</span></h1>
      <p>Gerencie agora mesmo os seus projetos!</p>
      <LinkButton to="/novoProjeto" text="Criar Projeto"/>
      <img src={savings} alt="saving"/>
    </section>
  )
}

export default Home