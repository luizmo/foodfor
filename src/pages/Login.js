import React, { Component, Fragment } from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import api from "../lib/api";
import { login } from "../lib/auth";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = { email: '', password: '', error: false };
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    
    handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;
  
      try {
        const response = api.post("/login", { email, password });
        login(response.data.token);
        if(response.data.type == 'doador'){
            history.push("/receiver");
        }
        else{
            history.push("/giver");
        }
      } 
      catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }   

    render(){
        const { error } = this.state;
        console.log(error);
        return(
            <Fragment>
                <main className="login-block">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })}/> 
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Sua senha" onChange={e => this.setState({ password: e.target.value })}/>
                            <label>Sua senha</label>
                        </div>

                        <button type="submit">Login</button>
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

export default withRouter(Login);

