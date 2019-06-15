import React, { Fragment, Component } from 'react';
import Slider from 'react-slick';

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
	render(){
		return(
			<Fragment>
				<main className="donation">
					<div className="hiper-banner">
						<img src={require('../img/donation.jpg')} alt=""/>
						<div>
							<h1>Doe Alimentos</h1>
						</div>
					</div>
					<div className="content-donation">
						<p> Bacon ipsum dolor amet sirloin t-bone tri-tip porchetta prosciutto.
                        Meatball bacon ball tip brisket alcatra. Drumstick chuck buffalo venison.
                        Ham hock spare ribs buffalo beef ribs pig, doner shank bacon ball tip bresaola
                        cow beef pork belly shoulder.</p>
                        <p> Bacon ipsum dolor amet sirloin t-bone tri-tip porchetta prosciutto.
                        Meatball bacon ball tip brisket alcatra. Drumstick chuck buffalo venison.
                        Ham hock spare ribs buffalo beef ribs pig, doner shank bacon ball tip bresaola
                        cow beef pork belly shoulder.</p>
                        <p> Bacon ipsum dolor amet sirloin t-bone tri-tip porchetta prosciutto.
                        Meatball bacon ball tip brisket alcatra. Drumstick chuck buffalo venison.
                        Ham hock spare ribs buffalo beef ribs pig, doner shank bacon ball tip bresaola
                        cow beef pork belly shoulder.</p>
                        <p> Bacon ipsum dolor amet sirloin t-bone tri-tip porchetta prosciutto.
                        Meatball bacon ball tip brisket alcatra. Drumstick chuck buffalo venison.
                        Ham hock spare ribs buffalo beef ribs pig, doner shank bacon ball tip bresaola
                        cow beef pork belly shoulder.</p>
					</div>
					<div className="slider desktop">
						<Slider {...defaultPlayersOptions}>
							<div>
								<img src={require('../img/donation.jpg')} alt=""/>
							</div>
							<div>
								<img src={require('../img/donation.jpg')} alt=""/>
							</div>
							<div>
								<img src={require('../img/donation.jpg')} alt=""/>
							</div>	
						</Slider>
					</div>	
				</main>
				<footer className="home donation">
					<span>FoodFor</span>
				</footer>
			</Fragment>
		);
	}
}

export default Donation;