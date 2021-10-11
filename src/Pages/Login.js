import React from 'react'

function Login() {
    return (
        <div id="login_page">
            <div id="login_container">
                <div id="login_header">
                    <span>kutchinarapp</span>
                </div>
                <div id="login_body">
                    <form id="form_admin">
                        <span>ADMINISTRATOR PANEL</span>
                        <input type="text" name="adminUser" placeholder="Username" required/>
                        <input type="password" name="adminPass" placeholder="Password" required/>
                        <input type="submit" value="LOGIN" className="btn" id="btn_login"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
