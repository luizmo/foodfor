import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class MenuGiver extends Component{
	constructor(props){
		super(props);
		this.state = { isMenuOpen: false }
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.logout = this.logout.bind(this);
	}

	openMenu(){
		this.setState({ isMenuOpen: true });
		document.body.parentNode.classList.add('lock');
	}

	closeMenu(){
		this.setState({ isMenuOpen: false });
		document.body.parentNode.classList.remove('lock');
	}

	logout(e){
		const { history } = this.props;
		e.preventDefault();
		localStorage.clear();
		history.push('/');
	}
	render(){
		const { isMenuOpen } = this.state;
		return(
			<header className="fix-lateral">
				<button className="mobile" onClick={this.openMenu}>
					<img src={ require('../img/menu.png') } alt=""/>
				</button>
				<img className="mobile" src={require('../img/logo.png')} alt=""/>
	            <nav className={isMenuOpen ? 'active' : undefined }>
	                <ul>
	               		<button className="mobile" onClick={this.closeMenu}>
							<img src={ require('../img/close.png') } alt=""/>
						</button>
	                    <li>Listar Campanhas</li>
	                    <li onClick={ this.logout }> Sair</li>
	                </ul>
	            </nav>
	        </header>
		)
	}
}

export default withRouter(MenuGiver);