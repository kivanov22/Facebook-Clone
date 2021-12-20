import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Feed from '../components/Feed.js';
import Header from '../components/Header.js';
import Login from '../components/Login.js';
import Sidebar from '../components/Sidebar.js';
import Widgets from '../components/Widgets.js';
import { db } from '../firebase.js';
// import { collection, query, where, getDocs } from "firebase/firestore";


export default function Home({session , posts}) {
  if(!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden" >
      <Head>
        <title>Facebook</title>
       
      </Head>

   
    <Header />
    <main className="flex">
     <Sidebar />
     <Feed posts={posts}/>
     <Widgets/>
    </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp','desc').get();

  const docs = posts.docs.map(post=>({//pre fetch data
    id:post.id,
    ...post.data(),
    timestamp:null
  }))
  return {
    props:{
      session,
      posts:docs,
    }
  }
}