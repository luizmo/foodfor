import React, { Component, Fragment } from 'react';

class NewAccount extends Component{
    render(){
        return(
            <Fragment>
                <main className="login-block">
                    <h1>Criar Conta</h1>
                    <form method="POST">
                        <div>
                            <input type="text" placeholder="Seu nome"/> 
                            <label>Seu nome</label>
                        </div>
                        <div>
                            <input type="text" placeholder="E-mail"/> 
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Sua senha"/>
                            <label>Sua senha</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Endereço"/>
                            <label>Endereço</label>
                        </div>
                        <button type="submit">Criar conta</button>
                    </form>
                </main>
            </Fragment>
        )    
    }
}

export default NewAccount;