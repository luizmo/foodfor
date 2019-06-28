import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
		return(
			<Fragment>
 				<MenuGiver/>
				<main className="wrapper-campaings">

                    {campaings && campaings.map(campaing => (
                        <div className="box-campanha" key={campaing._id}>
                            <div className="placeholder-img">
                                <img src={campaing.url} alt=""/>
                                <div className="content">
                                    <p>{campaing.title}</p>
                                    <Link to={`/donation/${campaing._id}`}>DOAR</Link> 
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