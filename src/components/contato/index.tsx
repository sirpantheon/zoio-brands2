import styles from './contato.module.sass'

export default function Contato() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <h2 className={styles.h2}>Entre em contato conosco</h2>

        <form>
          <label>Nome</label>
          <input placeholder='Seu nome'></input>
          <label>Seu email*</label>
          <input placeholder='Seu endereço de email'></input>
          <label>Mensagem*</label>
          <input placeholder='Digite sua Mensagem'></input>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </section>
  )
}