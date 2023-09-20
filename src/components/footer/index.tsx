import Image from 'next/image'
import LogoGif from '../../../public/logo.gif'
import styles from './footer.module.sass'

import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <h3>Zoio Design studio - 2023 © Todos os direitos reservados.</h3>
        
        <Image src={LogoGif} alt='Logo' height={193} />

        <div className={styles.svg}>
          <AiOutlineInstagram />
        </div>
      </div>
    </footer>
  )
}
