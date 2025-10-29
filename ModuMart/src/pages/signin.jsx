import React from 'react'

const signin = () => {
  return (
    <section className='signin'>
            <div className="get-info">
                <h3>Sign In Page</h3>
                <p>This is where users will sign in to their accounts.</p>
            </div>
            <form action="post">
            <input type="email" placeholder='Email Address' required />
            <input type="password" placeholder='Password' required />
            <button type='submit' className='btn-signin'>Sign In</button>
        </form>
        
    </section>
  )
}

export default signin
