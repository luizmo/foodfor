import React, { Component, Fragment } from 'react';

class Receiver extends Component{
    render(){
        return(
            <Fragment>
                <header className="fix-lateral">
                    <nav>
                        <ul>
                            <li>Criar página Campanha</li>
                            <li>Gerenciar fotos</li>
                            <li>Comentários</li>
                            <li>Sair</li>
                        </ul>
                    </nav>
                </header>
                <main className="wrapper-campaings">
                    <div className="box-campanha">
                        <div className="placeholder-img">
                            <div className="content">
                               <p>Lorem ipsum</p>
                               <span>Lorem ipsum dolor sit amet</span> 
                            </div>
                        </div>
                    </div>

                     <div className="box-campanha">
                        <div className="placeholder-img">
                            <div className="content">
                               <p>Lorem ipsum</p>
                               <span>Lorem ipsum dolor sit amet</span> 
                            </div>
                        </div>
                    </div>
                        
                </main>
                <footer>

                </footer>
            </Fragment>
        )
    }
}
export default Receiver;