import React, { Component } from 'react'

class FormAjout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nouveauDepart:''
         }
    }

    setDepart=(event)=> {
        this.setState({
            nouveauDepart:event.target.value
        })
    }

    addDepart = (event) => {
        event.preventDefault();
        this.props.addDepart(this.state.nouveauDepart);
    }

    render() { 
        return ( 
            <div className="card m-2">
                <div className="card-header">
                    <strong>Liste des départements</strong>
                </div>
                <div className="card-body">
                    <form onSubmit={this.addDepart}>
                        <div className="row m-2">
                            <div className="col">
                                <input className="p-1" type="text" 
                                        name="depart"
                                        placeholder="Nouveau département" 
                                        value={this.state.nouveauDepart}
                                        onChange={this.setDepart}/>
                            </div>
                            <div className="col col-auto">
                                <button className="btn btn-primary">Ajouter département</button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
            
            
            
         );
    }
}
 
export default FormAjout;