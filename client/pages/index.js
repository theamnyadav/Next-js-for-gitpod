import {useState} from 'react'
import Axios from 'axios'
export default function Home() {
  const [userReg, setUserReg] = useState("")
  const [password, setPassword] = useState("")

  const register = () =>{
    Axios.post("https://localhost:3001/register", {
      username:userReg,
      password:password,
    }).then((response)=>{
      console.log(response)
    })
  }
  return (
    <div>
      <input type='text' placeholder='Name' onChange= {(e)=>{
setUserReg(e.target.value)
      }}/>
      <input type='password' placeholder='Password' onChange= {(e)=>{
setPassword(e.target.value) }}/>
<button onClick={register}>Register</button>
    </div>

  )
}
