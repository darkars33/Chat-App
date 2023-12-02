import React,{useState} from 'react'

function Register() {
          const [username, setUsername]= useState('')
          const [password , setPassword]= useState('')
  return (
    <div className='bg-blue-50 h-screen flex items-center'>
          <form className='w-64 mx-auto'>
                    <input value={username} onChange={e=> setUsername(e.target.value)} type="text" placeholder='username' className='block w-full rounded-sm p-2 mb-2 border'/>
                    <input  value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder='password' className='block w-full rounded-sm p-2 mb-2 border'/>
                    <button className='bg-blue-500 text-white block w-full p-2 rounded-sm'>Register</button>
          </form>
    </div>
  )
}

export default Register;