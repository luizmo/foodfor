import React, { Component, Fragment } from 'react';
import api from '../lib/api';
import { withRouter } from 'react-router-dom';
class FlowDonation extends Component{
	state = {file: ' ', title: ' ', description:' '}
    
    handleSignIn = async e => {
        e.preventDefault();
	
		const data = new FormData();
		data.append('file',this.state.file);
		data.append('title',this.state.title);
		data.append('description',this.state.description);
         try {
			await api.post("/post", data);
			this.props.history.push("/receiver");
            
         } catch (err) {
           console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
         }
	}

	
	render(){
		return(
			<Fragment>
				<header className="flow-donation">
					<h1>Criando uma Campanha de Doação</h1>
				</header>
				<main className="create-donation">
					<form onSubmit={this.handleSignIn}>
					     <div>
						    <label>IMAGEM</label> <br/>
							<input type="file" onChange={e =>this.setState({file: e.target.files[0]})}/>
						</div>
						<div>
							<input type="text" placeholder="Nome da Campanha de Doação"onChange={e => this.setState({ title: e.target.value })}/>
							<label>Nome da Campanha de Doação</label>
						</div>
						<div>
							<input type="text" placeholder="Informe uma pequena descrição"/>
							<label>Informe uma pequena descrição</label>
						</div>
						<div>
							<textarea placeholder="Este espaço está reservado para que apresente a instituição ou causa para qual deseja apoio" onChange={e => this.setState({ description : e.target.value })}/>
						</div>
						<div>
							
						</div>
						<div>
							<button type="submit" value="Criar Campanha de Doação">Criar Campanha de Doação</button>
						</div>
					</form>
				</main>
				<footer className="home donation">
					<span>FoodFor</span>
				</footer>
			</Fragment>
		)
	}
}

export default withRouter(FlowDonation);