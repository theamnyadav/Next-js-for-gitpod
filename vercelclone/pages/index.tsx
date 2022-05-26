import type { NextPage } from 'next'
import Head from 'next/head'
import {db} from '../firebase'
import { useState } from 'react';
import { collection, addDoc,getDocs,doc, getDoc } from "firebase/firestore";
const Home: NextPage = () => {
  const [chat, setChat] = useState('');
const [getChat,setGetChat] = useState([]);

  const handleonSubmit = async (e) =>{
    e.preventDefault();
    if(chat !==""){
      await addDoc(collection(db,"Chat"),{
chat,
completed:false,
      });
      setChat('')
    }
  }

  const getChatMsg = async (e) =>{
e.preventDefault();
await getDocs(db).then((Response)=>{
  setGetChat(Response.docs.map((data)=>{
    return { ...data.data(),id:data.id}
  }))
})
  }
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Vercel Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<h1 className='text-3xl font-bold '>Vercel</h1>
<form onSubmit={handleonSubmit}>
  <input className='outline-none border-2 border-blue-400 py-2 px-2 rounded-md' placeholder='Enter Message' type='text' value={chat} onChange={(e)=>setChat(e.target.value)} />
  <button>Add Chat</button>
</form>
<div>

</div>
    </div>
  )
}

export default Home
