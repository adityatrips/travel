import React from "react";
import tDb from './packageDb/thailand.json';
import {Link, useParams} from "react-router-dom";
import ThailandDetails from "./Thailand/ThailandDetails";

const Thailand = () => {
    const {thailand} = tDb;
    const {packageName} = useParams();

    switch (packageName) {
        case "pearls-of-thailand":
            return <ThailandDetails packName={packageName}/>
        case "beaches-of-thailand":
            return <ThailandDetails packName={packageName}/>
        case "thai-paradise":
            return <ThailandDetails packName={packageName}/>
        default:
            return <p className={'text-center'}>404</p>
    }

    return <div className={"container"}>
        <div className="row row-cols-sm-1 row-cols-md-2">
            {thailand.map(pack => (<div className="col justify-content-center mb-3 h-100" key={pack.name}>
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

export default Thailand;