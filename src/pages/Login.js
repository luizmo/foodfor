import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component{
    render(){
        return(
            <Fragment>
                <main className="login-block">
                    <h1>Login</h1>
                    <form method="POST">
                        <div>
                            <label>E-mail</label>
                            <input type="text" placeholder="E-mail"/> 
                        </div>
                        <div>
                            <label>Sua senha</label>
                            <input type="password" placeholder="Sua senha"/>
                        </div>
                    </form>
                    <div className="new-account">
                        <p>Ainda não tem conta? 
                            <NavLink to="/new-account">
                                Clique aqui e requistre-se
                            </NavLink>
                        </p>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Login;