import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Cutterist</title>
        <meta name="description" content="✨Special Design Cutters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.etsy.com/uk/shop/TheCutterist">The Cutterist</a>
        </h1>

        <p className={styles.description}>
        ❤️ Cutters produced with love for using in jewellery making (or anything
        else you wish) for you and your shop.<br /><br />
        🏢 We use 3D printer to create and produce the cutters, our little
        studio is born and based in Manchester, UK. <br /><br />
        ♻️ The raw material used to produce the cutters is PLA Biodegrable
        Plastic, they are very resistant and durable. <br /><br />
        🎯 Our main objective is to help you, offering special design cutters,
        to make your jewellery even more fantastic! <br /><br />
        </p>

        <div className={styles.grid}>
          <a href="https://www.etsy.com/uk/shop/TheCutterist" className={styles.card}>
            <h2>Shop &rarr;</h2>
            <p>The Cutterist</p>
          </a>

          <a href="https://www.etsy.com/uk/shop/TheCutterist" className={styles.card}>
            <h2>Shop &rarr;</h2>
            <p>The Cutterist</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
