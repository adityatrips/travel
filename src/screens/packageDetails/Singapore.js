import React from "react";
import sDb from './packageDb/singapore.json';
import {Link, useParams} from "react-router-dom";
import SingaporeDetails from "./Singapore/SingaporeDetails";

const Singapore = () => {
    const {singapore} = sDb;
    const {packageName} = useParams();

    switch (packageName) {
        case "fascinating-singapore":
            return <SingaporeDetails packName={packageName}/>
        case "charming-singapore-with-malaysia":
            return <SingaporeDetails packName={packageName}/>
        case "simply-singapore":
            return <SingaporeDetails packName={packageName}/>
        case "singapore-fully-loaded":
            return <SingaporeDetails packName={packageName}/>
        case "singapore-special":
            return <SingaporeDetails packName={packageName}/>
        case "singapore-with-bali":
            return <SingaporeDetails packName={packageName}/>
        default:
            return <p className={'text-center'}>404</p>
    }

    return <div className={"container"}>
        <div className="row row-cols-sm-1 row-cols-md-2">
            {singapore.map(pack => (<div className="col justify-content-center mb-3 h-100" key={pack.name}>
                <div className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{pack.name}</h5>
                        <h6 className="card-subtitle text-muted">{pack.code}</h6>
                        <Link to={pack.link} className="mt-2 btn secondary-bg text-white w-100">Explore</Link>
                    </div>
                </div>
            </div>))}
        </div>
    </div>
}

export default Singapore;