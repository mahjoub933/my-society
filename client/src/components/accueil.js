import React, { Component } from 'react'

const msg ="Bienvenue à notre site de la société : Ma Société";
class Accueil extends Component {
    
    render() {

        return (<div>
                    <h2>{msg}</h2>
                </div>);
    
    }
}
export default Accueil;

