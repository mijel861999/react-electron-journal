import React from 'react'

import './login.css'

const Login = () => {
  return (
    <section className="login-section">
        <h1>Login</h1>
        <form>
            <input placeholder="Username" type="text" name="username" />
            <input placeholder="Password" type="password" name="password" />
            <button>Submit</button>
        </form>
    </section>
  )
}

export default Login