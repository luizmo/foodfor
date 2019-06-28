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
                                <h2> Objetivo </h2>
                                <p>
                                    Foodfor tem o objetivo de ligar doadores e instituições que necessitam de doações, aumentar a visibilidade e mostrar a importância dessas instituições na sociedade fazendo com que o número de doações cresça cada vez mais . O maior intuito do Foodfor é manter o processo de doação o mais transparente possível, para que isso aconteça os doadores poderão interagir com as instituições que receberão os alimentos durante todo o processo da doação.
                                </p>
                            </div>    
                        </Element>
                        <Element name="como">
                            <img src={require('../img/como.png')} alt=""/>
                            <div className="text-wrapper">
                                <h2> Como Ajudar </h2>
                                <p>
                                   Para se tornar um doador é muito simples. Primeiro faça seu cadastro como um doador no nosso site, em seguida é só escolher uma instituição que deseja apoiar e efetuar a doação.
                                </p>
                            </div>    
                        </Element>
                        <Element name="quem">
                            <img src={require('../img/quem.png')} alt=""/>
                            <div className="text-wrapper">
                                <h2> Quem Somos </h2>
                                <p>
                                    Foodfor é um mediador que tem o objetivo de ajudar pessoas que fazem a diferença na sociedade. Por meio de sua doação centenas de pessoas terão a chance de ter uma alimentação saudável e várias instituições poderão continuar fazendo seu trabalho em prol de quem precisa.
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