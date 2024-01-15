import React,{ useState } from 'react' 
import './SignIn.css'


function SignIn(){
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    return(
        <div className='signIn'>
            <h1>signIn to your account</h1>
            <input type='text' placeholder="enter your email" value={email} onChange={e=>setEmail(e.currentTarget.value)} />
            <input type='password' placeholder="" value={password} onChange={e=>setPassword(e.currentTarget.value)} />
            <button onClick={console.log('clicked signIn')}>signIn</button>
        </div>
    )
}

export default SignIn