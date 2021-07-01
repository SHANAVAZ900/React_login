import React from 'react'
import FileUpload from '../upload/FileUpload'


function Hero({handleLogout,user}) {

    const username = user.email.split('@')

    return (
        <section className="hero">
            <nav>
                <h2>Welcome {username[0]}</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <FileUpload />
        </section>
    )
}

export default Hero
