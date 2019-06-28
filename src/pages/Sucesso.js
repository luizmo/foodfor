import React, { Component, Fragment } from 'react';
import { NavLink,withRouter } from 'react-router-dom';

class Sucesso extends Component{
    render(){
        return(
            <Fragment>
                <main className="login-block">
                    <h1>Sua doação foi encaminhada!<br/> Muito obrigado por fazer diferença no mundo</h1>
                    <NavLink to="/giver">Voltar às campanhas</NavLink>
                </main>
            </Fragment>
        );
    }
}

export default withRouter(Sucesso);
