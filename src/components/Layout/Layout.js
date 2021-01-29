import Head from 'next/head'
import Header from '../Header/Header'
import styles from './Layout.module.css'


export default function Layout({ children , title="World Ranks" }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                Michael Guerrero @ mikelikescode.com
      </footer>
        </div>
    )
}
