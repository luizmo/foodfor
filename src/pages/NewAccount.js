import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import api from "../lib/api";

class NewAccount extends Component{
    constructor(props){
        super(props);
        this.state = { erro: false, name:'', email:'', password:'', type:'', address:'', telephone: '', cpf_cnpj:'' }
    }

    handleSignUp = async e => {
        e.preventDefault();
        const { name, email, password, type, address, telephone, cpf_cnpj } = this.state;
        const { history } = this.props;
        try {
            await api.post("/register", {name,email, password, type, address, telephone,cpf_cnpj });
            history.push("/");
        } 
        catch (err) {
            this.setState({ error: true });
        }
    }
    render(){
        const { error } = this.state;
        return(
            <Fragment>
                <main className="login-block">
                    <h1>Criar Conta</h1>
                    <form method="POST" onSubmit={ this.handleSignUp }>
                        <div>
                            <input type="text" placeholder="Seu nome" onChange={ e => this.setState({ name: e.target.value }) } /> 
                            <label>Seu nome</label>
                        </div>
                        <div>
                            <input type="e-mail" placeholder="E-mail" onChange={ e => this.setState({ email: e.target.value }) }/> 
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Sua senha" onChange={ e => this.setState({ password: e.target.value }) }/>
                            <label>Sua senha</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Endereço" onChange={ e => this.setState({ address: e.target.value }) }/>
                            <label>Endereço</label>
                        </div>
                        <div>
                            <input type="number" placeholder="Telefone" onChange={e => this.setState({ telephone: e.target.value })}/>
                            <label>Telefone</label>
                        </div>
                         <div>
                            <input type="text" placeholder="CPF ou CNPJ" onChange={e => this.setState({ cpf_cnpj: e.target.value })}/>
                            <label>CPF ou CNPJ</label>
                        </div>
                        <div className="radios">
                            <div>
                                <input id="doador" type="radio" value="doador" onChange={e => this.setState({ type: e.target.value })}/>
                                <label htmlFor="doador">Doador</label>
                            </div>
                            <div>    
                                <input id="donatario" type="radio" value="donatario" onChange={ e => this.setState({ type: e.target.value}) }/>
                                <label htmlFor="donatario">Donatário</label>
                            </div>    
                        </div>
                        <button type="submit">Criar conta</button>
                    </form>
                </main>
            </Fragment>
        )    
    }
}

export default withRouter(NewAccount);