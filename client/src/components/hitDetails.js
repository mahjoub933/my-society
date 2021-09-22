import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./hitItem";

class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
          hit:null
        }
    }

    render() {
        if(this.state.hit)
        return (
            <HitItem hit={this.state.hit} details={true}></HitItem>
        );
        else {
            return <div></div>
        }
    }

    componentDidMount() {
        this.getHits(this.props.match.params.id);
    }

    getHits(id){
        let url="https://pixabay.com/api/?key=16038116-1601cf38aef095472d2f0b59f&id="+id;
        axios.get(url).then((resp)=>{
            this.setState({
                hit:resp.data.hits[0],
            });
        }).catch(err=>{
            console.log(err)
        });
    }
}
export default HitDetails;
