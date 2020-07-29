import Layout from '../components/Layout';
import Link from 'next/link';

export default function Posts({usersData}) {
    if (!usersData){
        return(
            <Layout>
                Loading...
            </Layout>
        );
    }
    return (
        <Layout title="Posts page">
            <h1>Posts</h1>
            <ul>
                {
                    usersData.map(user=>{
                      return  (
                      <li>
                            <div>Name: {user.name}</div>
                            <div>Eye color: {user.eyeColor} </div>
                        </li>
                        );
                    })
                }
            </ul>
            <Link href={'/'}><a>Back to Home page</a></Link>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const response = await fetch('http://www.json-generator.com/api/json/get/cgcEEPXOJK?indent=2');
    const request = await response.json();
    return {
      props: {
         usersData : request
      }
    }
  }