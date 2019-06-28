import React, { Fragment, Component } from 'react';
import Slider from 'react-slick';
import { withRouter, Link } from 'react-router-dom';
import  api  from '../lib/api';

const defaultPlayersOptions = {
  infinite: true,
  lazyLoad: false,
  easing: 'ease',
  swipe: false, 
  responsive: [
    {
      breakpoint: 997,
      settings: {
        arrows: false,
        dots: true,
        swipe: true
      }
    }
  ]
}

class Donation extends Component{
	constructor(props){
        super(props);
        this.state = { campaings: null }
    }
    async componentDidMount(){
        const response = await api.get('post');
        this.setState({campaings: response.data});
    }
	render(){
		const { history, match: { params: { slug }  } } = this.props;
		const { campaings } = this.state;
		if(campaings){
			var campaing = campaings.find(campaing => campaing._id == slug)
		}
		return(
			<Fragment>
				<main className="donation">
					{campaing && (
						<Fragment>
							<div className="hiper-banner">
								<img src={campaing.url} alt=""/>
								<div>
									<h1>{campaing.title}</h1>
								</div>
							</div>
							<div className="content-donation">
								<p>{campaing.description}</p>
								<Link to="/success-donation"> Doar </Link>
							</div>	
						</Fragment>
					) }
				</main>
				<footer className="home donation">
					<span>foodfor</span>
				</footer>
			</Fragment>
		);
	}
}

export default withRouter(Donation);