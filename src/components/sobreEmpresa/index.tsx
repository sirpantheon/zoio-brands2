import styles from './sobre.module.sass'
import Image from 'next/image'
import LogoGif from '../../../public/logo.gif'

export default function SobreEmpresa() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <div className={styles.paragrafo}>

          <div className={styles.title}>
            <div>
              <span>Sobre a </span><span className={styles.zoio}> Zoio</span>
            </div>
          </div>

          <span className={styles.texto}>A Zoio é um estúdio de design, focado em identidade visual. Nossa abordagem está em desvendar novas perspectivas e estimular uma reavaliação fundamental de como as marcas interagem com o mundo.</span>
          <span className={styles.texto}>Em um cenário onde nossa influência tecnológica e degradação ambiental moldaram profundamente nosso planeta, temos o desejo de desempenhar um papel na redenção dessas marcas que fizemos.</span>
          <span className={styles.texto}>No entanto, nosso objetivo não se limita a reparar as cicatrizes visíveis; também buscamos entender como nossas criações impactaram a vida em todas as suas formas, particularmente os olhares não humanos que compartilham este planeta conosco</span>
          <span className={styles.texto}>Como os seres que não falam a nossa língua interpretam os traços que deixamos? Como percebem os contornos das cidades que construímos e os símbolos que criamos?</span>
          <span className={styles.texto}>Nossa jornada não é apenas criar designs, mas também questionar, explorar e desdobrar as camadas que constituem as percepções e conexões que nossas marcas evocam. Através da introspecção profunda, podemos começar a entender como as marcas humanas são interpretadas por aqueles que, sem voz, ainda têm muito a nos dizer.</span>
          <span className={styles.naming}>Naming</span>
          <span className={styles.texto}>A Zoio nasce diante de uma vontade de crescer, e nada mais justo do que homenagear a pessoa que mais me incentivou nesse passo (meu pai), que carrega esse apelido há anos.</span>
          <button className={styles.btn_queroMudar}>Quero mudar minha marca</button>
        </div>

        <div className={styles.logo}>
          <Image src={LogoGif} layout="responsive" objectFit="contain" alt={"logo"}  />
        </div>

      </div>
    </section>
  )
}