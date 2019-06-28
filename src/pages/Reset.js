import React, { Component, Fragment } from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import api from "../lib/api";
import { login } from "../lib/auth";

class Reset extends Component{
    constructor(props){
        super(props);
        this.state = {email: undefined, password: undefined, token: undefined, error: false }
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { email, token, password } = this.state;
        const { history } = this.props;
        try {
            const response = await api.post("/forgot_password", { email, password, token });
            history.push("/login");
        }
        catch (err) {
            this.setState({error: true }); 
        }
    };

    render(){
        const { error } = this.state;
        return(
            <Fragment>
                <main className="login-block">
                    <h1>Criar nova senha</h1>
                    <form onSubmit={this.handleSignIn}>
                        <div>
                            <input type="text" placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })}/> 
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })}/> 
                            <label>Senha</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Token" onChange={e => this.setState({ token: e.target.value })}/> 
                            <label>Token</label>
                        </div>
                        <button type="submit">Criar</button>
                    </form>
                </main>
            </Fragment>
        );
    }
}

export default withRouter(Reset);
