import Link from 'next/link';
import Head from 'next/head';
import styles from './layout.module.css';

export default function Layout({children,title='Next JS'}){
    return(
        <>
        <Head>
            <title>{title} | NextJS</title>
        </Head>
        <nav className={styles.navigation}> 
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/posts'}><a>Posts</a></Link>
        </nav>
        <main>
            {children}
        </main>
        </>
    );
}