import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
   <Layout title="Home Page">
    <h1>Home Page</h1>
    <Link href={'/posts'}><a>Go to the posts</a></Link>
   </Layout>
  )
}
