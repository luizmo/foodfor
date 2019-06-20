import React, { Component, Fragment } from 'react';
import { MenuGiver } from '../components';

class Giver extends Component{
	render(){
		return(
			<Fragment>
 				<MenuGiver/>
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