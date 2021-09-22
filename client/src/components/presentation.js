import React, { Component } from 'react'

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
                        ],
                        nouveauDepart :''
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
            <div>
                <div>
                    <h2>{this.state.titre}</h2>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><img width='100' src={this.state.contact.logo} alt="logo"></img></td>
                                <td align='left'>
                                    <ul>
                                        <li>{this.state.contact.nom}</li>
                                        <li>{this.state.contact.email}</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <h2>Liste des départements</h2>
                    </div>          
                    <div>
                        <form onSubmit={this.addDepart}>
                            <div>
                                <input type="text" name="depart"
                                        placeholder="Nouveau département" 
                                        value={this.state.nouveauDepart}
                                        onChange={this.setDepart}/>
                                <button>Ajouter département</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Département</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.departs.map((d)=> 
                                        <tr key={d.id} align='left'>
                                            <td>{d.id}</td>
                                            <td>{d.nom}</td>
                                            <td><button onClick={()=>this.deleteDepart(d)}>X</button></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>        
                    
                </div>
            </div>
         );
    }
}
 
export default Presentation;