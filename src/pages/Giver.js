import React, { Component, Fragment } from 'react';

class Giver extends Component{
	render(){
		return(
			<Fragment>
 				<header className="fix-lateral">
                    <nav>
                        <ul>
                            <li>Listar Campanhas</li>
                            <li>Novas doações</li>
                            <li>Acompanhar doações</li>
                        </ul>
                    </nav>
                </header>
				<main className="wrapper-campaings">
					<div className="box-campanha">
                        <div className="placeholder-img">
                            <div className="content">
                               <p>Lorem ipsum</p>
                               <span>Lorem ipsum dolor sit amet</span>
                               <a href="">DOAR</a> 
                            </div>
                        </div>
                    </div>
				</main>
				<footer>
				</footer>
			</Fragment>
		);
	}
}

export default Giver;