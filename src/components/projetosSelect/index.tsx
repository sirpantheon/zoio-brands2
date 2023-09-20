import styles from './projetoSelect.module.sass'
import Carousel from '../carousel';


export default function ProjetoSelect() {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>Projeto Selecionados</span>
        <div className={styles.projeto}>
          <div className={styles.ContainerCarousel}>
            <Carousel />
 
          </div>
        </div>
      </div>
    </section>
  )
}