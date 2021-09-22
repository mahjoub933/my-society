import React, { Component } from 'react'
import FormAjout from './formAjout';
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
                <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Département</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.departs.map((d, index)=> 
                                    <tr key={index} align='left'>
                                        <td>{d.code}</td>
                                        <td>{d.nom}</td>
                                        <td><button onClick={()=> remove(d._id,()=>this.getDepartements())}>X</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
            </div>
         );
    }
}
export default ListDeparts;