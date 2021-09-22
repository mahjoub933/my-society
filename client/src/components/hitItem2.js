import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function HitItem(props) {
    return (
        <div className={(props.details===false) ? 'col-md-auto' : 'm-2'}>
            <div className="card" key={props.hit.id}>
                <div className="card-header">{props.hit.tags} | {props.hit.webformatWidth}X{props.hit.webformatHeight}</div>
                <div className="card-body">
                    {
                        (props.details === false) ? 
                            <img className="card-img" height={200} src={props.hit.webformatURL} alt=""/>
                            : <img src={props.hit.largeImageURL} alt=""/>
                    }

                </div>
                {
                    (props.details === false) ?
                        <div className="m-2">
                            <Link className="btn btn-success" to={'/hitDetails/' + props.hit.id}>Hit details</Link>
                        </div>
                        :
                        <div>
                            <div className="row p-2">
                                <div className="col col-auto">
                                    <img className="img-thumbnail" src={props.hit.userImageURL} alt=""/>
                                </div>
                                <div>
                                    <ul className="nav nav-pills">
                                        <li className="list-group-item">Views :<strong>{props.hit.views}</strong></li>
                                        <li className="list-group-item">Comments :<strong>{props.hit.comments}</strong></li>
                                        <li className="list-group-item">Downloads :<strong>{props.hit.downloads}</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link className="btn btn-primary" to={"/photos"}>Retour</Link>
                            </div>
                        </div>

                }

            </div>
        </div>
    );
}

export default HitItem;
