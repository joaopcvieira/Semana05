import React from 'react'
import './Login.css'

export default props => {
    return (
        <div className="body">
                <div className="box-login">
                    <div className="login"><h2>Login</h2></div>
                    <div className="email">
                        <label htmlFor="Email"><h3>Email</h3></label>
                        <input type="email" placeholder="Enter an email" />
                    </div>
                    <div className="password">
                        <label htmlFor="Password"><h3>Password</h3></label>
                        <input type="password" placeholder="Enter an password" />
                    </div>
                    <div className="clicks">
                        <button className="btnlogin">
                           Login
                        </button>
                        <a href="#">Sign up</a>
                    </div>
                    
                </div>
                
            </div>
    )
}