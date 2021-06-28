import React from 'react'

function Login({email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}) {

    return (
        <section className="login">
            <div className ="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className ="errorMsg">{emailError}</p>
                <label>PassWord</label>
                <input  type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an account ? <span onClick={() =>setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>


                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
