import Head from 'next/head'
import styles from '../../styles/Home.module.sass'
import Banner from '../components/banner'
import ProjetoSelect from '../components/projetosSelect'
import Sobre from '../components/sobre'
import Contato from '../components/contato'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zoio Brands</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <ProjetoSelect />
        <Sobre />
        <Contato />

      </main>
    </div>
  )
}
