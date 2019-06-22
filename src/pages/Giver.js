import React, { Component, Fragment } from 'react';
import { MenuGiver } from '../components';
import  api  from '../lib/api';

class Giver extends Component{
    constructor(props){
        super(props);
        this.state = { campaings: null }
    }
    componentWillMount(){
        api.get('/post').then( res => this.setState({ campaings: res.data }))
    }
	render(){
        const { campaings } = this.state;
        console.log(campaings)
		return(
			<Fragment>
 				<MenuGiver/>
				<main className="wrapper-campaings">

                    {campaings && campaings.map(campaing => (
                        <div className="box-campanha">
                            <div className="placeholder-img">
                                <div className="content">
                                    <p>Lorem ipsum</p>
                                    <span>Lorem ipsum dolor sit amet</span>
                                    <a href="">DOAR</a> 
                                </div>
                            </div>
                        </div>
                    ))}
				
				</main>
				<footer>
				</footer>
			</Fragment>
		);
	}
}

export default Giver;