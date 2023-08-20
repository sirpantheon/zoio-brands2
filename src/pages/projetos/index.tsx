import styles from './projetos.module.sass'

export default function ProjetoSelect() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>FxHub</span>
        <div className={styles.projeto}></div>
      </div>
    </section>
  )
}