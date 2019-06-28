import React, { Component, Fragment } from 'react';
import { Element } from 'react-scroll';
import { MenuHome } from '../components';
class Home extends Component{
    render(){
        return(
            <Fragment>
                <MenuHome/>
                <main className="home">
                   <div className="brand-wrapper">
                        <img src={ require('../img/donation.jpg') } alt=""/>
                        <div>
                            <h1>foodfor</h1>
                        </div>    
                    </div>
                    <div className="content-wrapper">

                        <Element name="projeto">
                            <img src={require('../img/projeto.png')} alt=""/>
                            <div className="text-wrapper">
                                <h2> O Projeto </h2>
                                <p>
                                    Bacon ipsum dolor amet sirloin t-bone tri-tip porchetta prosciutto.
                                    Meatball bacon ball tip brisket alcatra. Drumstick chuck buffalo venison.
                                    Ham hock spare ribs buffalo beef ribs pig, doner shank bacon ball tip bresaola
                                    cow beef pork belly shoulder.
                                </p>
                            </div>    
                        </Element>
                        <Element name="como">
                            <img src={require('../img/como.png')} alt=""/>
                            <div className="text-wrapper">
                                <h2> Como Ajudar </h2>
                                <p>
                                    Spicy jalapeno bacon ipsum dolor amet pork belly prosciutto brisket
                                    pork loin t-bone, meatball buffalo pork chop short ribs bacon burgdoggen
                                    alcatra. Corned beef shoulder chuck beef ribs boudin tongue tenderloin salami
                                    venison tri-tip kielbasa. Pork tenderloin ground round shoulder cupim, venison
                                    ham hock hamburger pork chop strip steak andouille bacon sausage alcatra landjaeger.
                                    Ham rump pork belly pancetta, ground round salami sausage pork chop chicken venison.
                                </p>
                            </div>    
                        </Element>
                        <Element name="quem">
                            <img src={require('../img/quem.png')} alt=""/>
                            <div className="text-wrapper">
                                <h2> Quem Somos </h2>
                                <p>
                                    Bacon ipsum dolor amet sirloin t-bone tri-tip porchetta prosciutto.
                                    Meatball bacon ball tip brisket alcatra. Drumstick chuck buffalo venison.
                                    Spicy jalapeno bacon ipsum dolor amet pork belly prosciutto brisket
                                    pork loin t-bone, meatball buffalo pork chop short ribs bacon burgdoggen
                                    alcatra. Corned beef shoulder chuck beef ribs boudin tongue tenderloin salami
                                    venison tri-tip kielbasa.
                                </p>
                            </div>    
                        </Element>
                    </div> 
                </main>
                <footer className="home">
                    <div className="social-wrapper">
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                    </div>
                    <div className="wrapper">

                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Home