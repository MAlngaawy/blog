import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({name, blogs}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello To {name} Blog</h1>
      {blogs.map(blog => {
        return <h2>{blog.title}</h2>
      })}
    </div>
  )
}


export async function getStaticProps(context) {

  const res = await fetch('http://localhost:1337/blogs')
  const blogs = await res.json();
  return {
    props: {
      name: 'Alngaawy',
      blogs
    }, // will be passed to the page component as props
  }
}