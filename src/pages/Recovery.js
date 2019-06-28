import React, { Component, Fragment } from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import api from "../lib/api";
import { login } from "../lib/auth";

class Recovery extends Component{
    constructor(props){
        super(props);
        this.state = {email: undefined, error: false }
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { email } = this.state;
        const { history } = this.props;
        try {
            const response = await api.post("/forgot_password", { email });
            history.push("/reset");
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
                    <h1>Esqueceu sua senha?</h1>
                    <form onSubmit={this.handleSignIn}>
                        <div>
                            <input type="text" placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })}/> 
                            <label>E-mail</label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </main>
            </Fragment>
        );
    }
}

export default withRouter(Recovery);
