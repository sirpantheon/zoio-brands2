import Image from 'next/image'
import LogoGif from '../../../public/logo.gif'
import styles from './header.module.sass'
import Link from 'next/link';
import * as React from 'react';
import MenuBurger from '../menu/index'


export default function Header() {

  return (
    <header className={styles.container}>
      <div className={styles.header}>

        <div className={styles.logo}>
          <Image src={LogoGif} alt={"logo"} className={styles.Image} />
        </div>

        <div className={styles.menu}>
          <button><Link href={"/"}>Inicio</Link></button>
          <button><Link href={"/sobre"}>Sobre</Link></button>
          <button><Link href={"/projetos"}>Projetos</Link></button>
          <button><Link href={"/contato"}>Contato</Link></button>
        </div>

        <div className={styles.menuBurger}>

        <MenuBurger />
        </div>


      </div>
    </header>
  )
}
