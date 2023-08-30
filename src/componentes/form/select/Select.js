import styles from './Select.module.css';

function Select({text, name, options, handleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select 
        name={name} 
        id={name} 
        onChange={handleOnChange} 
        value={value || ""}
      >
        <option>Selecione a opção</option>
        {options.map((opcao) => (
          <option value={opcao.id} key={opcao.id}>{opcao.nome}</option>
        ))}
      </select>
    </div>
  )
}

export default Select