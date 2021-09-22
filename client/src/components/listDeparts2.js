import React, { Component } from 'react'
import FormAjout from './formAjout2';
import { add, getAll, remove } from '../services/operationsDepart';

class ListDeparts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            departs :  [],
            nouveauDepart :''
         }
    }

    addDepart = (name) => {
        let newDepart={
            code: this.state.departs.length!==0 ? (parseInt([...this.state.departs].pop().code))+1 : 1,
            nom:name
        }
        add(newDepart, ()=> {
            this.getDepartements();
        })
    }

    getDepartements = () => {
        getAll((res)=> {
            console.log(res.data)
            this.setState({ 
                departs: res.data
            })
        })
    }
    componentDidMount = () => {
        this.getDepartements();
    }   

    render() { 
        return ( 
            <div>
                <FormAjout addDepart={this.addDepart}/>
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
                            this.state.departs.map((d,index)=>
                                <tr key={index}>
                                    <td>{d.code}</td>
                                    <td>{d.nom}</td>
                                    <td><button className="btn btn-danger" onClick={()=> remove(d._id,()=>this.getDepartements())}>X</button></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                        </div>
            </div>
         );
    }
}
 
export default ListDeparts;