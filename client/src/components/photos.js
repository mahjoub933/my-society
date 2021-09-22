import React, {Component} from 'react';
import axios from 'axios';
import FormRecherche from './formRecherche';
import HitItem from './hitItem';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:5,
            currentKeyWord:'',
            totalPages:1,
            pages:[]
        }
    }
    componentDidMount() {
        // this.getHits();
    }

    getHits(keyWord){
        let url="https://pixabay.com/api/?key=16038116-1601cf38aef095472d2f0b59f&q="
            +keyWord+"&page="+this.state.currentPage+"&per_page="+this.state.pageSize;
        
        axios.get(url).then((resp)=>{
            let totalPages= Math.ceil(resp.data.totalHits/this.state.pageSize);
            this.setState({
               hits:resp.data.hits,
                totalPages:totalPages,
                pages:new Array(totalPages).fill(0),
                currentKeyWord:keyWord
           });
        }).catch(err=>{
            console.log(err)
        });
    }

    search=(keyWord)=>{
        this.getHits(keyWord);
    }

    goToPage=(page)=> {
        this.setState({
            currentPage:page
        },()=>{
          this.getHits(this.state.currentKeyWord)
        });
    }

    render() {
        return (

            <div>
                <FormRecherche searchPhoto={this.search}/>
                {
                <div>
                    <ul>
                        <table>
                            <tr>
                            {
                                
                                this.state.pages.map((v,index)=>
                                    <td key={index}>
                                        <button onClick={()=>this.goToPage(index+1)}>{index+1}</button>
                                    </td>
                                )
                            }
                        </tr>
                        </table>
                    </ul>
                </div> }
                <div>
                {
                    this.state.hits.map(hit=>
                        <HitItem hit={hit} details={false} key={hit.id}/>
                    )
                }
                </div>
            </div>
        );
    }
}
export default Photos;
