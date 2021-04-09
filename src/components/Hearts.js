import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import HomeButton from './HomeButton'


class Hearts extends Component{
    render(){
    return (<div>
        <Header store={this.props}/>
        <div className="pregame_container" style={{width: "80%", marginBottom: "5%"}}>
            <h2 style={{textDecoration: "underline"}}>Game Summary</h2>
            <div className="rules" style={{fontFamily: "lemon"}}>
<h1 style={{textAlign:'left', marginLeft:'1%'}}>hearts</h1>

</div>
<HomeButton style={{}}/>
</div>
<Footer/>
</div>

    )
}
}
export default Hearts