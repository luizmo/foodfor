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
                      {campaings && campaings.map(campaing => (
                        <div className="box-campanha" key={campaing._id}>
                            <div className="placeholder-img">
                                <img src={campaing.url} alt=""/>
                                <div className="content">
                                    <p>{campaing.title}</p>
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