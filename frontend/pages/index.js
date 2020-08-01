import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello To {name} Blog</h1>
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {
      name: 'Alngaawy'
    }, // will be passed to the page component as props
  }
}