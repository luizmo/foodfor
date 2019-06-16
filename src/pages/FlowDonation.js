import React, { Component, Fragment } from 'react';


class FlowDonation extends Component{
	render(){
		return(
			<Fragment>
				<header className="flow-donation">
					<h1>Criando uma Campanha de Doação</h1>
				</header>
				<main className="create-donation">
					<form method="POST">
						<div>
							<input type="text" placeholder="Nome da Campanha de Doação"/>
							<label>Nome da Campanha de Doação</label>
						</div>
						<div>
							<input type="text" placeholder="Informe uma pequena descrição"/>
							<label>Informe uma pequena descrição</label>
						</div>
						<div>
							<textarea placeholder="Este espaço está reservado para que apresente a instituição ou causa para qual deseja apoio"/>
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

export default FlowDonation;