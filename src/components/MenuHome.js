import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


const scrollLinkDefaultProps = {
  spy: true,
  smooth: true,
  duration: 400,
  offset: -100

};

class MenuHome extends Component{
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
			<header className="home">
                <p>Insert logo here</p>
                <nav className={ isMenuOpen ? 'active' : undefined }>
                  <ul>
                    <li>
                        <ScrollLink to="projeto" {...scrollLinkDefaultProps} title=" O Projeto" onClick={this.closeMenu}>
                            O Projeto
                            <hr/>
                        </ScrollLink>  
                    </li>
                    <li>
                        <ScrollLink to="como" {...scrollLinkDefaultProps} title=" Como Ajudar" onClick={this.closeMenu}>
                            Como Ajudar
                            <hr/>
                        </ScrollLink>  
                    </li>
                    <li>
                        <ScrollLink to="quem" {...scrollLinkDefaultProps} title=" Quem Somos" onClick={this.closeMenu}>
                            Quem Somos
                            <hr/>
                        </ScrollLink>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>    
                        <hr/>
                    </li>  
                  </ul>
                </nav>
            </header>
		);
	}
}

export default MenuHome;