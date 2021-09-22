import React, { Component } from 'react'

class FormRecherche extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            motCle:''
         }
    }

    setMotCle=(event)=> {
        this.setState({
            motCle:event.target.value
        })
    }

    searchPhoto=(event)=> {
        event.preventDefault();
        this.props.searchPhoto(this.state.motCle);
    }

    render() { 
        return ( 
            <form onSubmit={this.searchPhoto}>
                <div>
                    <div>
                        <input type="texte"
                               value={this.state.motCle}
                               onChange={this.setMotCle}
                               placeholder="Mot clé"/>
                    
                        <button type="submit">Rechercher</button>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default FormRecherche;