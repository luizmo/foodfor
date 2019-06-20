import React, { Component } from 'react';

class MenuGiver extends Component{
	constructor(props){
		super(props);
		this.state = { isMenuOpen: false }
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	openMenu(){
		this.setState({ isMenuOpen: true });
		document.body.parentNode.classList.add('lock');
	}

	closeMenu(){
		this.setState({ isMenuOpen: false });
		document.body.parentNode.classList.remove('lock');
	}
	render(){
		const { isMenuOpen } = this.state;
		return(
			<header className="fix-lateral">
	            <nav className={isMenuOpen ? 'active' : undefined }>
	                <ul>
	                    <li>Listar Campanhas</li>
	                    <li>Novas doações</li>
	                    <li>Acompanhar doações</li>
	                    <li>Sair</li>
	                </ul>
	            </nav>
	        </header>
		)
	}
}

export default MenuGiver;