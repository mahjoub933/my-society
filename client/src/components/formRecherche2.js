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
                <div className="row m-2 p-2">
                    <div className="col">
                        <input type="texte" className="form-control"
                               value={this.state.motCle}
                               onChange={this.setMotCle}
                               placeholder="Mot clé"/>
                    </div>
                    <div className="col col-auto">
                        <button className="btn btn-success" type="submit">Rechercher</button>
                    </div>
                </div>    
            </form>
         );
    }
}
export default FormRecherche;