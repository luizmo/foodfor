import React, { Component, Fragment } from 'react';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <header>
                    <p>logo</p>
                    <nav>
                      <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>  
                      </ul>
                    </nav>
                </header>    
                <main>
                   <div className="brand-wrapper">
                       <h1>FoodFor</h1>
                       <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="content-wrapper">
                        <div>
                            <p>Primeiro conteudo scrollavel fade-in lateral</p>
                        </div>
                        <div>
                            <p>Segundo scrollavel fade-in</p>
                        </div>
                        <div>
                            <p>Terceiro scrollavel fade-in</p>
                        </div>
                    </div> 
                </main>
                <footer>
                    <div className="social-wrapper">
                        <a href="">social media</a>
                        <a href="">social media</a>
                        <a href="">social media</a>
                    </div>
                    <div className="wrapper">

                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Home