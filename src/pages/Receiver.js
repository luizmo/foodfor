import React, { Component, Fragment } from 'react';
import { MenuReceiver } from '../components';
import  api  from '../lib/api';
class Receiver extends Component{
    constructor(props){
        super(props);
        this.state = { campaings: null }
    }
    componentWillMount(){
        api.get('/post/list').then( res => this.setState({ campaings: res.data }))
    }
    render(){
        const { campaings } = this.state;
        console.log(campaings);
        return(
            <Fragment>
                <MenuReceiver/>
                <main className="wrapper-campaings">
                      {campaings && campaings.post.map(campaing => (
                        <div className="box-campanha" key={campaing.key}>
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
        )
    }
}
export default Receiver;