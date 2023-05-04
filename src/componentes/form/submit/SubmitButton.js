import styles from './SubmitButton.module.css';

function SubmitButton({text, largura}) {
  return (
    <button type='submit' className={`${styles.submitButton} ${styles[largura]}`}>
    {text}</button>
  )
}

export default SubmitButton