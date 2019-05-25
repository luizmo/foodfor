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
                            <input type="text" placeholder="E-mail"/> 
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Sua senha"/>
                            <label>Sua senha</label>
                        </div>
                    </form>
                    <div className="new-account">
                        <p>Ainda não tem conta? <br/> 
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