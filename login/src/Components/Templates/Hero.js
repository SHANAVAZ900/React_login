import React from 'react'

function Hero({handleLogout,user}) {

    const username = user.email.split('@')

    return (
        <section className="hero">
            <nav>
                <h2>Welcome {username[0]}</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero
