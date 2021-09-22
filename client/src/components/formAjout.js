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
            <div>
                <div>
                    <h2>Liste des départements</h2>
                </div>          
                <div>
                    <form onSubmit={this.addDepart}>
                        <div>
                            <input type="text" name="depart"
                                placeholder="Nouveau département" 
                                value={this.props.nouveauDepart}
                                onChange={this.setDepart}/>
                            <button>Ajouter département</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default FormAjout;