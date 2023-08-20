import styles from './projetoSelect.module.sass'

export default function ProjetoSelect() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>Projeto Selecionados</span>
        <div className={styles.projeto}></div>
      </div>
    </section>
  )
}