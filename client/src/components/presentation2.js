import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                        titre :"Qui sommes nous ?",
                        contact : {
                            nom : "Ma Société",
                            email : "contact@masociete.com",
                            logo:'images/informatique.jpg'

                        },
                        departs :  [
                            {id : 1, nom :"Commercial"},
                            {id : 2, nom :"Développement"},
                            {id : 3, nom :"Maintenance"}
                        ]
                    }
    }

    addDepart = (event) => {
        event.preventDefault();
        let newDepart={
            id:[...this.state.departs].pop().id+1,
            nom:this.state.nouveauDepart
        }
        this.setState({
            departs:[...this.state.departs,newDepart]
        })
    }

    setDepart=(event)=> {
        this.setState({
            nouveauDepart:event.target.value
        })
    }

    deleteDepart=(d)=>{
      let index = this.state.departs.indexOf(d);
      let listDeparts=[...this.state.departs];
      listDeparts.splice(index,1);
      this.setState({
          departs:listDeparts
      })
    }

    render() { 
        return ( 
            <div className="m-4">
                <div>
                    <div className="card">
                        <div className="card-header">
                            <strong><label>{this.state.titre}</label></strong>
                        </div>

                        <div className="row p-2">
                            <div className="col col-auto">
                                <img width={100} src={this.state.contact.logo} alt=""/>
                            </div>

                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">{this.state.contact.nom}</li>
                                    <li className="list-group-item">{this.state.contact.email}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

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
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Département</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {
                                    this.state.departs.map((d)=>
                                        <tr key={d.id}>
                                            <td>{d.id}</td>
                                            <td>{d.nom}</td>
                                            <td><button className="btn btn-danger" onClick={()=>this.deleteDepart(d)}>X</button></td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Presentation;