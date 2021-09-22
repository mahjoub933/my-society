import React, { Component } from 'react'

class Apropos extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            titre :"Qui sommes nous ?",
            contact : {
                        nom : "Ma Société",
                        email : "contact@masociete.com",
                        logo:'images/informatique.jpg'
                      },    
        }
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
                </div>
            </div> );
    }
}
 
export default Apropos;