import React, {Component} from 'react';
import axios from 'axios';
import FormRecherche from './formRecherche2';
import HitItem from './hitItem2';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:10,
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
            let totalPages=Math.ceil(resp.data.totalHits/this.state.pageSize);
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
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index)=>
                                <li key={index}>
                                    <button className={ (this.state.currentPage===index+1) ? 'btn btn-primary' : 'btn btn-link'} onClick={()=>this.goToPage(index+1)}>{index+1}</button>
                                </li>
                            )

                        }
                    </ul>
                </div>
                
                <div className="row">
                {
                    this.state.hits.map(hit=>
                        <HitItem hit={hit} details={false} key={hit.id}></HitItem>
                    )
                }
                </div>
            </div>
        );
    }
}
export default Photos;
