import React from 'react';
import {Link} from "react-router-dom";

function HitItem(props) {
    return (
        <div >
            <div>
                <div >{props.hit.tags} | {props.hit.webformatWidth}X{props.hit.webformatHeight}</div>
                <div >
                    {
                        (props.details === false) ? <img height={200} src={props.hit.webformatURL} alt=""/>
                                                  : <img src={props.hit.largeImageURL} alt=""/>
                    }

                </div>
                {
                    (props.details === false) ?
                        <div >
                            <Link to={'/hitDetails/' + props.hit.id}>Hit details</Link>
                        </div>
                        :
                        <div>
                            <div >
                                <div >
                                    <img src={props.hit.userImageURL} alt=""/>
                                </div>
                                <div>
                                    <ul>
                                        <li >Views :<strong>{props.hit.views}</strong></li>
                                        <li >Comments :<strong>{props.hit.comments}</strong></li>
                                        <li >Downloads :<strong>{props.hit.downloads}</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link to={"/photos"}>Retour</Link>
                            </div>
                        </div>

                }

            </div>
        </div>
    );
}

export default HitItem;
